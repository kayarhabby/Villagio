import "../../css/Formulaire_inscription_connexion.css"
export default function RegistrationForm() {
    return (
        <section id="form">
            <div className="form_container">
                <h2>Log in</h2>
                <form id="formulaire">
                    <div className="form-control">
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="Email" name="Email"/>
                        <small>Error message</small>
                    </div>
                    <div className="form-control">
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" name="Password"/>
                        <small>Error message</small>
                    </div>
                </form>

                <button type = "submit"><span>Connexion</span></button>
            </div>
        </section>
    )
}
