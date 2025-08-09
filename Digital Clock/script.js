function digitalClock() {
    setInterval(() => {

        // Variables to get time.
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let date = time.getDate();
        let month = time.getMonth();
        let meridian = "A.M"
        let year = time.getFullYear();
        let clock = document.querySelector(".container");

        // If else logic
        if (hours > 12) {
            hours = "0" + (hours - 12)
            meridian = "P.M"
        }
        else if (hours === 0) {
            hours = 12
            meridian = "A.M"
        }
        else if (hours < 12) {
            hours = "0" + hours
            meridian = "A.M"
        }
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        if (seconds < 10) {
            seconds = "0" + seconds
        }
        if (date < 10) {
            date = "0" + date
        }
        if (month < 10) {
            month = "0" + month
        }

        // html to add the time to our clock
        let html = ` <div class="time">
            <div class="t hours">${hours}</div>:
            <div class="t minutes">${minutes}</div>:
            <div class="t seconds">${seconds}</div>
            <div class="t meridian">${meridian}</div>
        </div>
        <div class="date">
            <div class="d date">${date}</div>-
            <div class="d month">${month}</div>-
            <div class="d year">${year}</div>
        </div>`

        // inputting the html
        clock.innerHTML = html
    }, 1000);

}
digitalClock();