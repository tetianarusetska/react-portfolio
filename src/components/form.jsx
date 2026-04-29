import { useForm } from "react-hook-form";
import schema from "../schemas/FormValid.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export default function Form() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            const response = await fetch("https://formspree.io/f/mkokllka", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSent(true);
                reset();
            }
        } catch (error) {
            console.log("ERROR:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            className="flex flex-col gap-[20px] mt-[180px] ml-[160px]"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-[10px]">
                <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">
                    Vorname, Nachname
                </label>

                <input
                    type="text"
                    className="border-1 h-[26px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"
                    {...register("name")}
                />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-[10px]">
                <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">
                    Email
                </label>

                <input
                    type="email"
                    className="border-1 h-[26px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"
                    {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-[10px]">
                <label className="leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[32px]">
                    Brief
                </label>

                <textarea
                    maxLength={300}
                    className="border-1 h-[100px] w-[450px] leading-[1.2em] font-[Montserrat, sans-serif] font-extralight text-[20px]"
                    {...register("message")}
                />
                {errors.message && <p>{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                className="w-[96px] h-[31px] text-black bg-white"
                disabled={loading}
            >
                {loading ? "Sending..." : "Absenden"}
            </button>

            {sent && (
                <p className="text-white">
                    Danke für Ihre Nachricht!
                </p>
            )}
        </form>
    );
}