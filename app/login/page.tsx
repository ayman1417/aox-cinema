"use client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import Link from 'next/link'
import React from 'react'
import { auth } from '../firebase/firebase.config';
import * as Yup from "yup";
import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

export default function Login() {
    const router = useRouter();

    type loginValues = {
        email: string;
        password: string;
    };

    const formik = useFormik<loginValues>({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: register,

        validationSchema: Yup.object({
            email: Yup.string().required("Email is Required").email("Invalid email").max(50, "Too long"),
            password: Yup.string().required("Password is Required").min(6, "Too short").max(50, "Too long"),
        }),
    })

    async function register(values: loginValues) {
        try {
            const loggedUseer = await signInWithEmailAndPassword(auth, values.email, values.password)
            // const id: string = loggedUseer._tokenResponse.idToken
            // localStorage.setItem("id", JSON.stringify(id))
            router.push("/")
        }
        catch (error) {
            console.log("error is: ", error);
            toast.error(`${error}`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <main className="min-h-dvh flex items-center justify-center p-4 bg-gray-100 dark:bg-[#0f172a] transition-colors duration-300">
            <div className="grid md:grid-cols-2 w-full max-w-5xl bg-white dark:bg-tertiary rounded-2xl shadow-2xl transition-colors duration-300">

                {/* left section */}
                <div className="relative bg-linear-to-br md:grid hidden from-white to-gray-50 dark:from-tertiary dark:to-[#0f172a] to-70% rounded-l-2xl overflow-hidden p-8">

                    <div className="absolute -top-10 -left-8 h-64 w-64 bg-primary/25 dark:bg-primary/20 rounded-full blur-3xl"></div>

                    <div>

                        {/* Logo */}
                        <div className="text-3xl mt-4 font-black tracking-widest text-gray-900 dark:text-white">
                            AOX <span className="text-primary">CINEMA</span>
                        </div>

                        {/* Main content */}
                        <div className="relative z-10 mt-6">

                            <span className="inline-block rounded-full border border-primary/30 bg-primary/30 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-800 dark:text-white">
                                Your next movie awaits
                            </span>

                            <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 dark:text-white lg:text-5xl">
                                Every story
                                <br />
                                deserves the
                                <br />
                                <span className="text-primary">
                                    big screen.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-400">
                                Discover the latest movies, explore showtimes,
                                choose your favorite seats, and enjoy an unforgettable
                                cinema experience with AOX Cinema.
                            </p>

                            {/* Features */}
                            <div className="mt-8 grid grid-cols-3 gap-3">

                                <div className="rounded-xl border border-gray-300 dark:border-white/10 hover:bg-primary/80 bg-primary duration-200  dark:bg-white/5 p-3 backdrop-blur-sm  dark:hover:border-primary/30 dark:hover:bg-primary/5">
                                    <p className="text-sm font-bold text-white">
                                        Discover
                                    </p>
                                    <p className="mt-1 text-[11px] text-gray-50 dark:text-gray-500 font-medium">
                                        Latest movies
                                    </p>
                                </div>

                                <div className="rounded-xl border border-gray-300 dark:border-white/10 hover:bg-primary/80 bg-primary duration-200  dark:bg-white/5 p-3 backdrop-blur-sm  dark:hover:border-primary/30 dark:hover:bg-primary/5">
                                    <p className="text-sm font-bold text-white">
                                        Choose
                                    </p>
                                    <p className="mt-1 text-[11px] text-gray-50 dark:text-gray-500 font-medium">
                                        Your perfect seat
                                    </p>
                                </div>

                                <div className="rounded-xl border border-gray-300 dark:border-white/10 hover:bg-primary/80 bg-primary duration-200  dark:bg-white/5 p-3 backdrop-blur-sm  dark:hover:border-primary/30 dark:hover:bg-primary/5">
                                    <p className="text-sm font-bold text-white">
                                        Enjoy
                                    </p>
                                    <p className="mt-1 text-[11px] text-gray-50 dark:text-gray-500 font-medium">
                                        The big screen
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* right section */}
                <form onSubmit={formik.handleSubmit} className="relative overflow-hidden w-full md:p-12 p-8 sm:p-10 flex flex-col gap-9">

                    <div className="md:hidden absolute -top-10 -left-8 h-64 w-64 bg-primary/10 dark:bg-primary/15 rounded-full blur-3xl"></div>

                    <div className="text-center">
                        <h1 className="text-xl sm:text-3xl text-primary font-semibold">
                            Welcome back to AOX Cinema
                        </h1>

                        <p className="font-medium md:text-sm text-xs text-gray-600 dark:text-white mt-2">
                            Sign in to continue your cinema experience
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium text-gray-800 dark:text-white text-sm" htmlFor="email">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name='email'
                            id="email"
                            className="mt-1 rounded-md bg-gray-100 dark:bg-[#0f172a] px-4 py-3.5 text-sm text-gray-900 dark:text-primary outline-none transition placeholder:text-gray-400 dark:placeholder:text-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                            placeholder="you@example.com"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-medium text-gray-800 dark:text-white text-sm" htmlFor="password">
                            Password
                        </label>

                        <input
                            type="password"
                            name='password'
                            id="password"
                            className="mt-1 rounded-md bg-gray-100 dark:bg-[#0f172a] px-4 py-3.5 text-sm text-gray-900 dark:text-primary outline-none transition placeholder:text-gray-400 dark:placeholder:text-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                            placeholder="Enter your password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {formik.errors.password}
                            </p>
                        )}
                    </div>

                    <button
                        type='submit'
                        className="text-sm md:text-lg bg-primary p-2 rounded-lg text-white font-semibold hover:bg-amber-500 duration-300 cursor-pointer"
                    >
                        Login to Aox Cinema
                    </button>

                    <div className="flex items-center justify-center sm:text-sm text-xs">
                        <p className='text-gray-700 dark:text-white'>
                            Do not have an account ?
                        </p>

                        <Link href={"/signup"} className="ms-1 text-primary font-bold text-center">
                            Sign Up
                        </Link>
                    </div>

                    <p className="text-center text-xs text-gray-500 dark:text-gray-500">
                        Sign in to discover movies, book tickets, and enjoy the big screen.
                    </p>

                </form>
            </div>
        </main>
    )
}