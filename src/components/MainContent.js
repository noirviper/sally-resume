import React from "react"
import Work from "./Work"

function MainContent() {
    return (
        <main>
            <section class="img-container">
                <img class="profile-image" src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="A picture of super smart Sally Student" />
            </section>
            <section>
                <h2>Contact Info:</h2>
                <address>
                <p><b>Name:</b> Sally Student</p>
                <p><b>Email:</b> <a href="mailto:sally@student.com">sally@student.com</a></p>
                <p><b>Phone Number:</b> <a href="tel:+15555555555">555-555-5555</a></p>
                </address>
                
            </section>
            
            <section>
                <h2>Education:</h2>
                <p>The University of Missed Curly Brace - <em>August 2015</em></p>
                
            </section>

            <section>
                <h2>Work History:</h2>
                
                <Work 
                    company = "The Docotor"
                    role = "Companion"
                    date = "Sept 2017 - Current"
                    details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id lectus a ex vehicula tempor at vel justo. Integer vitae leo libero. Sed vestibulum cursus posuere. Etiam suscipit, magna vel malesuada consequat, dolor felis aliquam velit, eu tempor erat orci eget dui. Aenean vitae interdum purus. Nam ut augue elit. Nullam diam sapien, rhoncus at vestibulum sed, luctus a erat."
                />

                <Work 
                    company = "The Spacebar"
                    role = "Bartender"
                    date = "July 2015 - Sept 2017"
                    details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id lectus a ex vehicula tempor at vel justo. Integer vitae leo libero. Sed vestibulum cursus posuere. Etiam suscipit, magna vel malesuada consequat, dolor felis aliquam velit, eu tempor erat orci eget dui. Aenean vitae interdum purus. Nam ut augue elit. Nullam diam sapien, rhoncus at vestibulum sed, luctus a erat."
                />
            </section>
        </main>
    )
}

export default MainContent