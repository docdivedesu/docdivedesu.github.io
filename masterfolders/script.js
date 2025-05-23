const artists = [
    {
        "name": "Nayoshi",
        "id": "nayoshi",
        "mega": "https://mega.nz/folder/jjBklbBZ#iZpctjP-viiR49a5AN5RkQ",
        "description": "男の子とかケモノとか🔞",
        "socials": [
            { "name": "Twitter", "url": "https://twitter.com/nayoshi744", "icon": "fa-twitter" }
        ]
    },
    {
        "name": "Haozz",
        "id": "hao",
        "mega": "https://mega.nz/folder/72IGWI4K#yqs-iv-Vc2293Iuonp6RvQ",
        "description": "筋肉男子がすき。💪🏽",
        "socials": [
            { "name": "Twitter", "url": "https://twitter.com/haozz_", "icon": "fa-twitter" }
        ]
    },
    {
        "name": "Mazjojo",
        "id": "mazjojo",
        "mega": "https://mega.nz/folder/vi4X1B0B#Mz9FJ5VbtRFPlUnjfwBXJg",
        "description": "COMIFURO XX | AA20 (Indonesia)",
        "socials": [
            { "name": "Twitter", "url": "https://twitter.com/mazjojomania", "icon": "fa-twitter" },
            { "name": "Patreon", "url": "https://www.kickstarter.com/projects/archania-tarot/archania-tarot", "icon": "fa-kickstarter" }
        ]
    },
    {
        "name": "TBA",
        "id": "tba",
        "mega": "",
        "description": "TBA",
        "socials": [
            { "name": "?", "url": "", "icon": "fa-question" }
        ]
    },
    {
        "name": "TBA",
        "id": "tba",
        "mega": "",
        "description": "TBA",
        "socials": [
            { "name": "?", "url": "", "icon": "fa-question" }
        ]
    },
    {
        "name": "TBA",
        "id": "tba",
        "mega": "",
        "description": "TBA",
        "socials": [
            { "name": "?", "url": "", "icon": "fa-question" }
        ]
    },
    {
        "name": "TBA",
        "id": "tba",
        "mega": "",
        "description": "TBA",
        "socials": [
            { "name": "?", "url": "", "icon": "fa-question" }
        ]
    },
    {
        "name": "TBA",
        "id": "tba",
        "mega": "",
        "description": "TBA",
        "socials": [
            { "name": "?", "url": "", "icon": "fa-question" }
        ]
    }
];

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
    const holder = document.querySelector('.artist-holder');
    artists.forEach(artist => {
        const card = document.createElement('div');
        card.classList.add('artist-card');

        const banner = document.createElement('img');
        banner.src = `images/${artist.id}/banner.jpg`;
        banner.classList.add('banner');
        banner.alt = `${artist.name} banner`;

        const profile = document.createElement('img');
        profile.src = `images/${artist.id}/profile.jpg`;
        profile.classList.add('profile');
        profile.alt = `${artist.name} profile`;

        const name = document.createElement('span');
        name.classList.add('name');
        name.textContent = artist.name;

        const description = document.createElement('span');
        description.classList.add('item-count');
        description.textContent = artist.description;

        const nameWrapper = document.createElement('div');
        nameWrapper.classList.add('name-wrapper');
        nameWrapper.append(name, description);

        const profileWrapper = document.createElement('div');
        profileWrapper.classList.add('profile-wrapper');
        profileWrapper.append(profile, nameWrapper);

        const megaLink = document.createElement('a');
        megaLink.href = artist.mega;
        megaLink.textContent = "View on MEGA";
        megaLink.target = "_blank";
        megaLink.rel = "noopener noreferrer";
        megaLink.classList.add('mega-link');

        const socials = document.createElement('div');
        socials.classList.add('socials');
        artist.socials.forEach(social => {
            const socialLink = document.createElement('a');
            socialLink.href = social.url;
            socialLink.target = "_blank";
            socialLink.rel = "noopener noreferrer";
            socialLink.title = social.name;
            const icon = document.createElement('i');
            icon.classList.add('fab', social.icon);
            socialLink.appendChild(icon);
            socials.appendChild(socialLink);
        });

        card.append(banner, profileWrapper, megaLink, socials);
        holder.appendChild(card);
    });
});