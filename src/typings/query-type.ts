export interface TodosQueryResult {
  id: number;
  title: string;
  created_by: string;
  created_at: string;
  updated_at: string;
  description: string;
}

export interface TodoQueryResult {
  id: number;
  name: string;
  done: null;
  todo_id: number;
  created_at: string;
  updated_at: string;
  progress_percentage: number | null;
}

export interface AuthQueryResult {
  auth_token: string;
}
