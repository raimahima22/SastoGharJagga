<template>
    <div class="bg-container px-6 py-20 md:px-12 lg:px-20">
        <div
            class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-border w-full lg:w-6/12 mx-auto"
        >
            <div class="text-center mb-8">
                <!-- Correct path to logo from public/images -->
                <img v-bind:src="img" alt="logo" class="logo" />
                <div
                    class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4"
                    style="text-align: center; margin-top: -100px"
                >
                    {{ isLogin ? "Welcome Back" : "Create an Account" }}
                </div>

                <span
                    class="text-surface-600 dark:text-surface-200 font-medium leading-normal"
                >
                    {{
                        isLogin
                            ? "Don't have an account?"
                            : "Already have an account?"
                    }}
                </span>
                <a
                    @click="toggleForm"
                    class="font-medium no-underline ml-2 text-primary cursor-pointer"
                    >{{ isLogin ? "Create today!" : "Login here!" }}</a
                >
            </div>

            <div>
                <label
                    for="email1"
                    class="text-surface-900 dark:text-surface-0 font-medium mb-2 block"
                >
                    Email
                </label>
                <InputText
                    id="email1"
                    type="text"
                    placeholder="Email address"
                    class="w-full mb-4"
                />

                <!-- Show name and phone fields only when creating an account -->
                <div v-if="!isLogin">
                    <label
                        for="name"
                        class="text-surface-900 dark:text-surface-0 font-medium mb-2 block"
                    >
                        Name
                    </label>
                    <InputText
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        class="w-full mb-4"
                    />

                    <label
                        for="phone"
                        class="text-surface-900 dark:text-surface-0 font-medium mb-2 block"
                    >
                        Phone Number
                    </label>
                    <InputText
                        id="phone"
                        type="text"
                        placeholder="Phone number"
                        class="w-full mb-4"
                    />
                </div>

                <label
                    for="password1"
                    class="text-surface-900 dark:text-surface-0 font-medium mb-2 block"
                >
                    Password
                </label>
                <InputText
                    id="password1"
                    type="password"
                    placeholder="Password"
                    class="w-full mb-4"
                />

                <div class="flex items-center justify-between mb-12">
                    <div class="flex items-center">
                        <Checkbox
                            id="rememberme1"
                            v-model="checked1"
                            :binary="true"
                            class="mr-2"
                        />
                        <label for="rememberme1">Remember me</label>
                    </div>
                    <a
                        class="font-medium no-underline ml-2 text-primary text-right cursor-pointer"
                        >Forgot password?</a
                    >
                </div>

                <Button
                    :label="isLogin ? 'Sign In' : 'Sign Up'"
                    icon="pi pi-user"
                    class="w-full"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";

const checked1 = ref(true);
const isLogin = ref(true); // Boolean to track whether the user is in login or register form

const toggleForm = () => {
    isLogin.value = !isLogin.value; // Toggle between login and register form
};
</script>

<script>
export default {
    name: "Login",
    data() {
        return {
            img: "/images/logo.png",
        };
    },
};
</script>

<style scoped>
.bg-container {
    background-image: url("/images/bgpic.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh; /* Ensures the image spans the full height */
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg-surface-0 {
    background-color: white; /* Ensures the form has a white background */
    border-radius: 16px;
}
.logo {
    width: 400px; /* Adjust width */
    height: auto;
    display: block;
    margin: auto;
    margin-top: 0px;
}
</style>
