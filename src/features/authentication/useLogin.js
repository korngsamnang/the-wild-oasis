import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: user => {
            queryClient.setQueryData(["user"], user.user);
            navigate("/dashboard", { replace: true });
        },
        onError: error => {
            console.log("ERROR", error);
            toast.error("Provided email or password are incorrect");
        },
    });

    return { login, isLoading };
};
