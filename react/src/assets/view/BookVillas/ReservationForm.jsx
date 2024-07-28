export default function ReservationForm() {
    return (
        <form action="" className="reservation-form">
            <section>
                <h1>Booking Confirmation</h1>

                <article>
                    <h2>Booking Details</h2>
                    <div>
                        <label htmlFor="Check-in"> Check-in : </label>
                        <input type="date" placeholder="Check-in Date"/>
                    </div>
                    <div>
                        <label htmlFor="Check-out"> Check-out : </label>
                        <input type="date" placeholder="Check-out Date"/>
                    </div>
                </article>

                <article>
                    <h2>Accomodation #1</h2>
                    <p>
                        Accomodation Type : <span></span>
                    </p>
                </article>

                <article>
                    <h2>Price Breakdown</h2>

                    <div className="price">

                    </div>
                </article>

                <article>
                    <p>By filling out this form you acknowledge that you have read the terms and conditions, understand, and agree with them.</p>
                </article>

                <article>
                    <h2>Your Information</h2>
                    <div>
                        <label htmlFor="First Name"> First Name</label>
                        <input type="text" id="First Name" name="First Name"/>
                    </div>
                    <div>
                        <label htmlFor="Last Name">Last Name</label>
                        <input type="text" id="Last Name" name="Last Name"/>
                    </div>
                    <div>
                        <label htmlFor="Email"> Email </label>
                        <input type="email" id="Email" name="Email"/>
                    </div>
                    <div>
                        <label htmlFor="Phone">Phone number</label>
                        <input type="text" id="Phone" name="Phone"/>
                    </div>
                    <p>Total Price : </p>
                </article>

                <div>
                    <label htmlFor="terms"> I've read and accept <span>terms & conditions</span></label>
                    <input type="checkbox" id="terms" name="Terms" />
                </div>

            </section>

            <button type="submit " className="btn"> Book</button>

        </form>
    )
}
