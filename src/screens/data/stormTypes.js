const stormTypes={
    'R':{fn:'Radio blackout',wt:null,duration:'minutes - 3hrs',damage:[
        "Loss of HF radio communications on the Earth's daylight side.",
        'Short-lived (minutes to an hour) loss of GPS.',
        'Interference on civilian and military radar systems.'
    ]},
    'S':{fn:'Radiation storm',wt:'30min',duration:'hrs - days',damage:[
        "Satellite operations impacted. Loss of satellites possible.",
        "HF blackout in polar regions.",
        "Increased radiation exposure to passengers and crew in aircraft at high latitudes."
    ]},
    'G':{fn:'Geomagnetic storm',wt:'17-19 hrs',duration:'1-2days',damage:[
        "Possible bulk electric power grid voltage collapse and damage to electrical transformers.",
        "Interference or loss of satellite and sky wave radio communications due to scintillation.",
        "Interference or loss of Global Positioning System (GPS) navigation and timing signals.",
        "Satellite operations impacted."
    ]}
};
module.exports = stormTypes;