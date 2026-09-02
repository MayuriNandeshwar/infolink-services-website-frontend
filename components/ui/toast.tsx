'use client';

import * as React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: 'success' | 'error' | 'default';
  durationMs?: number;
}

interface ToastItem extends ToastOptions {
  id: string;
}

interface ToastContextValue {
  toast: (options: ToastOptions) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

const DEFAULT_DURATION_MS = 5000;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastItem[]>([]);

  const dismiss = React.useCallback((id: string) => {
    setToasts((current) => current.filter((t) => t.id !== id));
  }, []);

  const toast = React.useCallback(
    (options: ToastOptions) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      setToasts((current) => [...current, { ...options, id }]);

      const duration = options.durationMs ?? DEFAULT_DURATION_MS;
      window.setTimeout(() => dismiss(id), duration);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        className="fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2 sm:bottom-6 sm:right-6"
        role="region"
        aria-label="Notifications"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            aria-live="polite"
            className={cn(
              'pointer-events-auto flex items-start gap-3 rounded-lg border p-4 shadow-lg animate-in slide-in-from-bottom-4 fade-in-0 duration-300 bg-white',
              t.variant === 'success' && 'border-green-200',
              t.variant === 'error' && 'border-red-200',
              (!t.variant || t.variant === 'default') && 'border-gray-200'
            )}
          >
            {t.variant === 'success' && <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />}
            {t.variant === 'error' && <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600 mt-0.5" />}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[#0B1F3A]">{t.title}</p>
              {t.description && <p className="mt-1 text-sm text-gray-600">{t.description}</p>}
            </div>
            <button
              type="button"
              onClick={() => dismiss(t.id)}
              className="flex-shrink-0 rounded-sm text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a <ToastProvider>. Add it to app/layout.tsx.');
  }
  return context;
}
