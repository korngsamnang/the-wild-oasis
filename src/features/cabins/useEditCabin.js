import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export const useEditCabin = () => {
    const queryClient = useQueryClient();
    const { mutate: editCabin, isLoading: iseEditing } = useMutation({
        mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
        onSuccess: () => {
            toast.success("Cabin successfully Edited");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: err => toast.error(err.message),
    });

    return { iseEditing, editCabin };
};
