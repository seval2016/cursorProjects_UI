import { Home, BookOpen, CreditCard, GraduationCap } from 'lucide-react'
import { NavItem } from '@/components/ui/tubelight-navbar'

export const navItems: NavItem[] = [
  { name: 'Anasayfa', url: '#hero', icon: Home },
  { name: 'Eğitimler', url: '#popular-videos', icon: BookOpen },
  { name: 'Fiyatlar', url: '#pricing', icon: CreditCard },
  { name: 'Topluluğumuz', url: '#ready-to-learn', icon: GraduationCap }
] 