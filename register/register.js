addButton = document.querySelector("#add");
let participantCount = 1;
participantList = document.querySelector(".participants");
form = document.querySelector("form");
summary = document.querySelector("#summary");

function participantTemplate(participantCount) {
    return `
    <section class="participant${participantCount}">
            <p>Participant ${participantCount}</p>
            <div class="item">
              <label for="fname${participantCount}"> First Name<span>*</span></label>
              <input id="fname${participantCount}" type="text" name="fname${participantCount}" value="" required />
            </div>
            <div class="item activities">
              <label for="activity${participantCount}">Activity #<span>*</span></label>
              <input id="activity${participantCount}" type="text" name="activity${participantCount}" />
            </div>
            <div class="item">
              <label for="fee${participantCount}">Fee ($)<span>*</span></label>
              <input id="fee${participantCount}" type="number" name="fee${participantCount}" />
            </div>
            <div class="item">
              <label for="date${participantCount}">Desired Date <span>*</span></label>
              <input id="date${participantCount}" type="date" name="date${participantCount}" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
}

function submitForm(event) {
    event.preventDefault();
    const adultName = document.getElementById("adult_name").value;
    form.style.display = "none";
    total = totalFees();
    summary.innerHTML = `Thank you NAME for registering. You have registered ${participantCount} participants and owe $${total} in Fees.`;
    }

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    const total = Array.from(feeElements).reduce((sum, input) => sum + Number(input.value), 0);
    // once you have your total make sure to return it!
    return total;
    
    }

addButton.addEventListener('click', function () {
    participantCount += 1;
    newParticipant = participantTemplate(participantCount);
    addButton.insertAdjacentHTML("beforebegin", newParticipant);
        
});

form.addEventListener('submit', submitForm)

