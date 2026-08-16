const supabaseUrl = "https://jwflrmetzngucpbcurdx.supabase.co"
const supabaseKey = "sb_publishable_YCLdnZy0d87YwUL7icQXyQ_8eLGFOfw"

const { createClient } = supabase;

const client = createClient(supabaseUrl, supabaseKey);

console.log(client);

const form = document.querySelector("#studentRegistration")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new  FormData (form)
    const data = Object.fromEntries(formData)
    console.log(data);
})