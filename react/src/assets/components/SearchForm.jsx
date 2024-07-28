export default function SearchForm() {
    return (
        <form action="/searchVillaResult" method="post">
            <section>
                <div>
                    <label htmlFor="Check-in"> Check-in : </label>
                    <input type="date" placeholder="Check-in Date"/>
                </div>
                <div>
                    <label htmlFor="Check-out"> Check-out : </label>
                    <input type="date" placeholder="Check-out Date"/>
                </div>

                <div>
                    <label htmlFor="Adults"> Adults</label>
                    <select className="form-select">
                        <option selected>1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                        <option value="3">4</option>
                        <option value="4">5</option>
                        <option value="5">6</option>
                        <option value="6">7</option>
                        <option value="7">8</option>
                        <option value="8">9</option>
                        <option value="9">10</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="Children"> Children</label>
                    <select className="form-select">
                        <option selected>0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="Region"> Region</label>
                    <select className="form-select">
                        <option selected>AllVillas</option>
                        <option value="1">Aosta Valley</option>
                        <option value="2">Lazio</option>
                        <option value="3">Le Marche</option>
                    </select>
                </div>
            </section>

            <button type="submit " className="btn"> SEARCH</button>

        </form>
    )
}
