const supabaseUrl = "https://jwflrmetzngucpbcurdx.supabase.co";
const supabaseKey = "sb_publishable_YCLdnZy0d87YwUL7icQXyQ_8eLGFOfw";

const { createClient } = supabase;

const client = createClient(supabaseUrl, supabaseKey);

const form = document.querySelector("#loginForm");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const { data, error } = await client.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        Swal.fire({
            title: "Login Failed",
            text: error.message,
            icon: "error"
        });
        return;
    }

    console.log(data);

    Swal.fire({
        title: "Login Successful!",
        icon: "success",
        draggable: true
    }).then(() => {
        window.location.href = "dashboard.html";
    });
});