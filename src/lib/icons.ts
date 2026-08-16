import {
  Stethoscope, Siren, Scissors, HeartHandshake, TestTube, Scan, Pill,
  ClipboardCheck, Syringe, Activity, Smile, Eye, Ambulance, UserRound,
  ShieldCheck, Home, type LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Stethoscope, Siren, Scissors, HeartHandshake, TestTube, Scan, Pill,
  ClipboardCheck, Syringe, Activity, Smile, Eye, Ambulance, UserRound,
  ShieldCheck, Home,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Stethoscope;
}
