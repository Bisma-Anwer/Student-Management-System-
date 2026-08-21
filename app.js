const supabaseUrl = "https://jwflrmetzngucpbcurdx.supabase.co"
const supabaseKey = "sb_publishable_YCLdnZy0d87YwUL7icQXyQ_8eLGFOfw"

const { createClient } = supabase;

const client = createClient(supabaseUrl, supabaseKey);

console.log(client);

const form = document.querySelector("#studentRegistration")

form.addEventListener("submit", async (event) => {
    try {
        event.preventDefault()
        const formData = new FormData(form)

        let emptyField = false

        const inputs = document.querySelectorAll("input")
        inputs.forEach((input) => {
            if (input.value === "") {
                input.style.border = "2px solid red"
                emptyField = true

            }

        })
        if (emptyField) {
            return
        }


        const data = Object.fromEntries(formData)
        const { email, password,
            address, city, lastname, firstname, course, fathersname, dob, gender
        } = data
        console.log(address, city, lastname, firstname, course, fathersname, dob)


        const { data: signUpData, error } = await client.auth.signUp({
            email,
            password,
        })
        const id = signUpData?.user?.id
        console.log(id)


        // database insertion 
        const { error: databaseError } = await client
            .from('students_data')
            .insert({
                firstname,
                lastname,
                "father'sname": fathersname,
                address,
                course,
                dob,
                user_id: id,
                city,
                gender
            })
        console.log(databaseError)

        if (!databaseError) {
    window.location.href = "pages/login.html";
}
        
        if (signUpData) {
            console.log(signUpData)
        }
        else {
            console.log(error.message)
        }
    }
    catch (error) {
        console.log(error)
    }

})

const inputs = document.querySelectorAll("input")
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value !== "") {
            input.style.border = ""


        }
    })


})