import { ChulaSSOData } from "../cusso.interface";


export interface AuthState {
    user: ChulaSSOData | null;
    isAuthenticated: boolean;
}