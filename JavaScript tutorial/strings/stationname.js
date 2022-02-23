const stations = [
    "MAN675847583748sjt567654;Manchester Piccadilly",
    "GNF576746573fhdg4737dh4;Greenfield",
    "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
    "SYB4f65hf75f736463;Stalybridge",
    "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (let station of stations) {
    const code = station.slice(0, 3);
    const semiColon = station.indexOf(";");
    const name = station.slice(semiColon + 1);
    const result = `${code}: ${name}`;
    console.log(result);
}
