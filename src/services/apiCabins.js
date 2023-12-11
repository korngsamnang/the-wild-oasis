import supabase, { supabaseUrl } from "./supabase.js";

export const getCabins = async () => {
    const { data, error } = await supabase.from("cabins").select("*");
    if (error) {
        console.error(error);
        throw new Error("Cabins could not be loaded");
    }
    return data;
};

export const createEditCabin = async (newCabin, id) => {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
        "/",
        ""
    );

    const imagePath = hasImagePath
        ? newCabin.image
        : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    //1. Create cabin
    let query = supabase.from("cabins");
    if (!id)
        query = query.insert([
            {
                ...newCabin,
                image: imagePath,
            },
        ]);
    if (id)
        query = query
            .update({
                ...newCabin,
                image: imagePath,
            })
            .eq("id", id)
            .select();
    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Cabins could not be created");
    }
    //2. Upload image
    if (hasImagePath) return data;

    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    //3. Delete the cabin IF there was an error uploading image
    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        console.log(storageError);
        throw new Error(
            "Cabin image could not be uploaded and the cabin was not create"
        );
    }

    return data;
};

export const deleteCabin = async id => {
    const { error } = await supabase.from("cabins").delete().eq("id", id);
    if (error) {
        console.error(error);
        throw new Error("Cabins could not be deleted");
    }
};
