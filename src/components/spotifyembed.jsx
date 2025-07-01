import React from "react";

const SpotifyEmbed = () => {
    return (
        <div>
            <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/track/1QoyuMHNBe7lg3YW4Qtll4?utm_source=generator&theme=0"
                width="100%"
                height="100"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </div>
    );
};

export default SpotifyEmbed;