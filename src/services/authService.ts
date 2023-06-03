import { User, getUserByEmail } from "./userService";

export const login = async (email: string, password: string): Promise<User> => {
    const user = await getUserByEmail(email);
    if (user && user.password === password) {
        return user;
    } else {
        throw new Error("E-mail ou senha inválida");
    }
}