export default function ReservationForm() {
    return (
        <form action="" className="reservation-form">
            <section>
                <div>
                    <label htmlFor="Check-in"> Check-in : </label>
                    <input type="date" placeholder="Check-in Date"/>
                </div>
                <div>
                    <label htmlFor="Check-out"> Check-out : </label>
                    <input type="date" placeholder="Check-out Date"/>
                </div>

            </section>

            <button type="submit " className="btn"> Book</button>

        </form>
    )
}
