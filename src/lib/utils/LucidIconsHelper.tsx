import {
  X,
  File,
  Menu,
  Users,
  LogOut,
  Target,
  BookOpen,
  Sparkles,
  FileText,
  Settings,
  Download,
  FileDown,
  FilePlus,
  ChevronUp,
  UsersRound,
  PencilLine,
  RefreshCcw,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  NotebookPen,
  MessagesSquare,
  ChartColumnBig,
  SquareTerminal,
  LayoutDashboard,
  ClipboardPenLine,
  BriefcaseBusiness,
  MonitorSmartphone,
} from "lucide-react";

const ICON_MAP = {
  x: X,
  file: File,
  menu: Menu,
  users: Users,
  logOut: LogOut,
  target: Target,
  bookOpen: BookOpen,
  sparkles: Sparkles,
  fileText: FileText,
  settings: Settings,
  download: Download,
  fileDown: FileDown,
  filePlus: FilePlus,
  chevronUp: ChevronUp,
  usersRound: UsersRound,
  pencilLine: PencilLine,
  refreshCcw: RefreshCcw,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  notebookPen: NotebookPen,
  chevronRight: ChevronRight,
  messagesSquare: MessagesSquare,
  chartColumnBig: ChartColumnBig,
  squareTerminal: SquareTerminal,
  layoutDashboard: LayoutDashboard,
  clipboardPenLine: ClipboardPenLine,
  briefcaseBusiness: BriefcaseBusiness,
  monitorSmartphone: MonitorSmartphone,
};

export type LucidIconMap = keyof typeof ICON_MAP;

interface LucidIconProps {
  iconName: keyof typeof ICON_MAP;
  iconColor?: string;
  strokeWidth?: number;
  iconSize?: number;
}

const LucidIcon = ({
  iconName = "file",
  iconColor = "currentColor",
  strokeWidth = 2,
  iconSize = 24,
}: LucidIconProps) => {
  const IconComponent = ICON_MAP[iconName] ?? ICON_MAP.file;

  return (
    <IconComponent
      color={iconColor}
      strokeWidth={strokeWidth}
      size={iconSize}
    />
  );
};

export default LucidIcon;
