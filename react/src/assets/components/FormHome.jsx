export default function FormHome() {
    return (
        <form action="">
            <label htmlFor="Check-in"> Check-in : </label>
            <input type="date" placeholder="Check-in Date"/>

            <label htmlFor="Check-out"> Check-out : </label>
            <input type="date" placeholder="Check-out Date"/>

            <label htmlFor="Adults"> Adults</label>
            <select className="form-select">
                <option selected>1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
            </select>
            <label htmlFor="Adults"> Adults</label>
            <select className="form-select">
                <option selected>0</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
            </select>

            <button type="submit"> SEARCH</button>
        </form>
    )
}
