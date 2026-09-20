import {
  IoChatbubbles,
  IoCodeSlash,
  IoPerson,
  IoReceipt,
  IoRocket,
} from 'react-icons/io5';

export const menu = [
  { id: 'projects', key: 'tabProjects', Icon: IoRocket },
  { id: 'skills', key: 'tabSkills', Icon: IoCodeSlash },
  { id: 'about', key: 'aboutTab', Icon: IoPerson },
  { id: 'statement', key: 'statementTitle', Icon: IoReceipt },
  { id: 'contact', key: 'contactTitle', Icon: IoChatbubbles },
] as const;

export type ScreenId = (typeof menu)[number]['id'];
