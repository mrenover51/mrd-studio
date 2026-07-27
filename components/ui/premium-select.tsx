"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Option = { label: string; value: string };

export function PremiumSelect({
  value,
  onValueChange,
  options,
  placeholder,
  invalid,
  ariaLabel,
}: {
  value?: string;
  onValueChange: (value: string) => void;
  options: Option[];
  placeholder: string;
  invalid?: boolean;
  ariaLabel: string;
}) {
  return (
    <Select.Root value={value || undefined} onValueChange={onValueChange}>
      <Select.Trigger
        aria-label={ariaLabel}
        aria-invalid={invalid}
        className={cn(
          "group flex h-14 w-full items-center justify-between rounded-[16px] border bg-panel px-4 text-left text-sm text-paper outline-none transition-all duration-300",
          "border-accent/20 shadow-[0_8px_28px_rgba(0,217,255,.05)] hover:border-accent/35",
          "data-[state=open]:-translate-y-0.5 data-[state=open]:border-accent/65 data-[state=open]:shadow-[0_12px_38px_rgba(0,217,255,.14),0_0_0_1px_rgba(122,92,255,.1)]",
          invalid && "border-[#e2a186]/60",
        )}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon><ChevronDown size={16} className="text-accent transition-transform duration-300 group-data-[state=open]:rotate-180" /></Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={8}
          collisionPadding={16}
          className="z-[110] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[16px] border border-accent/20 bg-panel text-paper shadow-[0_24px_70px_rgba(0,0,0,.75),0_0_35px_rgba(0,217,255,.1)]"
        >
          <Select.Viewport className="max-h-[min(360px,var(--radix-select-content-available-height))] p-1.5">
            {options.map(option => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="relative flex min-h-11 cursor-pointer select-none items-center rounded-[11px] py-2.5 pl-4 pr-10 text-sm text-paper outline-none transition-colors duration-200 data-[highlighted]:bg-accent data-[highlighted]:text-ink data-[state=checked]:text-accent data-[highlighted]:data-[state=checked]:text-ink"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator className="absolute right-3"><Check size={15} /></Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
