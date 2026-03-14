function webretroEmbed(node, path, queries) {
    var frame = document.createElement("iframe");
    
    // Key Change: Force the iframe to fill the entire container area
    frame.style.border = "none";
    frame.style.width = "100%";
    frame.style.height = "100%";
    frame.style.display = "block"; // Helps prevent weird spacing at the bottom
    
    // change rom path to absolute if it isn't already
    if (queries.rom) {
        var link = document.createElement("a");
        // Ensure the path is correct based on your folder structure
        link.href = (/^(https?:)?\/\//i).test(queries.rom) ? queries.rom : "roms/" + queries.rom;
        queries.rom = link.href;
    }
    
    frame.src = path + "?" + Object.entries(queries)
        .map(i => i.map(val => val && encodeURIComponent(val)))
        .map(i => i[1] ? i.join("=") : i[0])
        .join("&");
        
    node.appendChild(frame);
    
    return frame;
}
