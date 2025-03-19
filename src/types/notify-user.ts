export interface NotifyUser {
  id: string;
  name?: string;
  email?: string;
  roles?: string;
  joinedAt?: string;
  position?: string; // ✅ `position` 속성 추가
  interest?: string[];
  purpose?: string[];
}
