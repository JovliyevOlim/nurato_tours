import React from 'react';

const footer = [
    'From Samarkand:\n' +
    '\n' +
    'Take a picturesque drive through the mountains to the Majrum Valley, with stops for short walks, sightseeing, and photos.\n' +
    '\n' +
    'Total cost: $45 + $15 per car (private driver included)',
    "From Navoi or Bukhara to Sentob (via Nurota):\n" +
    "\n" +
    "On your way to Sentob, you can stop at the remarkable Sarmish-Sai Petroglyph Gorge, famous for its thousands of ancient rock carvings.\n" +
    "\n" +
    "From Bukhara: $70 per car (+$20 for petroglyph stop)\n" +
    "\n" +
    "From Navoi: $45 per car (+$20 for petroglyph stop)\n" +
    "\n" +
    "\n" +
    "Before arriving in Sentob, you will also have the opportunity to visit the sacred Nurota shrine, beautifully located along the route.",
    "These scenic drives and cultural visits can also be arranged on your return trip.\n" +
    "\n" +
    "If you have any questions or need help planning your itinerary, feel free to contact us — we’re happy to assist!                                                                                                                       If you have any questions about travel itinerary ideas, feel free to reach out."

]

function MountainFooter(props) {
    return (
        <div className={'mountain-footer container my-5'}>
            <h2>Combine Tours with Your Destination</h2>
            <p>Private Driver Options to or from Samarkand, Bukhara, or Navoi</p>
            <div className="row">
                {
                    footer.map((item, index) =>
                        <div className="col-12 col-md-4">
                            <h5>{item}</h5>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default MountainFooter;