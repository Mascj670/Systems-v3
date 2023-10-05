window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Get all image elements
    var images = document.querySelectorAll('.content-item');

    // Loop through each image
    images.forEach(function(img) {
        // Get the position of the image relative to the top 
        var imgPosition = img.getBoundingClientRect().top;

        // Calculate opacity based on image position and scroll position
        // Adjust the denominator value to control the speed of fading
        var opacity = 1 - Math.max(0, (scrollPosition - imgPosition) / 50);

        // Ensure opacity remains within the range [0, 1]
        opacity = Math.max(0, Math.min(1, opacity));

        // Set opacity of image
        img.style.opacity = opacity.toFixed(2);
    });
});

// Bar chart animation 
function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        // If entry (bar) is in view
        if (entry.isIntersecting) {
            entry.target.classList.add('bar--visible');
        } else {
            // If entry (bar) is out of view
            entry.target.classList.remove('bar--visible');
        }
    });
}

// Set up the Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // control when the animation starts
    });

 
    document.querySelectorAll('.bar').forEach(bar => {
        observer.observe(bar);
    });
});

// Legend animation


function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        // If entry (legend) is in view
        if (entry.isIntersecting) {
            entry.target.classList.add('legend--visible');
        } else {
            // If entry (legend) is out of view
            entry.target.classList.remove('legend--visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust this value to control when the animation starts
    });


    document.querySelectorAll('.legend').forEach(legend => {
        observer.observe(legend);
    });
});






document.addEventListener('DOMContentLoaded', function(){ 
    var individuals = [
        {id: 'Chamath Palihapitiya', color: '#FF0000', companies: ['Facebook', 'Social Capital', 'Virgin Galactic', 'Slack', 'Cruise Automation', 'Robinhood', 'Ginkgo Bioworks', 'OpenSea', 'All-In Podcast']},
        {id: 'George Hotz', color: '#00FF00', companies: ['Comma.ai', 'Artificial Intelligence Researcher']},
        {id: 'Andrej Karpathy', color: '#0000FF', companies: ['OpenAI', 'Tesla, Inc.', 'Artificial Intelligence Researcher']},
        {id: 'Jason Calacanis', color: '#FFFF00', companies: ['Weblogs, Inc.', 'Mahalo.com', 'Inside.com', 'Uber', 'Robinhood', 'Wealthfront', 'AngelList', 'Thumbtack', 'All-In Podcast']},
        {id: 'Ray Dalio', color: '#FF00FF', companies: ['Bridgewater Associates']},
        {id: 'Elon Musk', color: '#FF9900', companies: ['Zip2 Corporation', 'PayPal', 'SpaceX', 'Tesla, Inc.', 'OpenAI', 'Neuralink', 'The Boring Company', 'Twitter']},
        {id: 'Larry Summers', color: '#9900FF', companies: ['U.S. Department of the Treasury', 'National Economic Council', 'Harvard University']},
        {id: 'David Sacks', color: '#00FFFF', companies: ['PayPal', 'Yammer', 'Zenefits', 'Airbnb', 'Stripe', 'Instacart', 'All-In Podcast']},
        {id: 'David Friedburg', color: '#FF6666', companies: ['The Climate Corporation', 'Metromile', 'Google', 'All-In Podcast']},
        {id: 'Vivek Ramaswamy', color: '#66FF66', companies: ['Roivant Sciences']},
        {id: 'Walter Isaacson', color: '#6666FF', companies: ['CNN', 'Aspen Institute']},
        {id: 'Lex Fridman', color: '#FFFF66', companies: ['MIT', 'Artificial Intelligence Researcher']},
        {id: 'Mark Zuckerberg', color: '#FF3366', companies: ['Facebook']},
        {id: 'Gwyneth Paltrow', color: '#FF3366', companies: ['Goop']},
        {id: 'Brian Armstrong', color: '#6633FF', companies: ['Coinbase']},
        {id: 'Jimmy Donaldson', color: '#66FFFF', companies: ['MrBeast YouTube Channel']},
        {id: 'Rob Henderson', color: '#FF3399', companies: []},
        {id: 'Coleman Hughes', color: '#99FF33', companies: []},
        {id: 'Jenny Just', color: '#3399FF', companies: ['PEAK6', 'Apex Fintech Solutions', 'Evil Geniuses', 'Zogo', 'Poker Power']},
        {id: 'Bill Gurley', color: '#FF9966', companies: ['Benchmark Capital']},
        {id: 'Caleb Ward', color: '#66FF99', companies: ['United States Nuclear Industry Council']},
        {id: 'Sam Altman', color: '#9966FF', companies: ['Loopt', 'Y Combinator', 'OpenAI', 'Airbnb', 'Stripe', 'Instacart', 'Coinbase', 'Artificial Intelligence Researcher']},
        {id: 'Ginni Rometty', color: '#FF66CC', companies: ['IBM']},
        {id: 'Robert Mumgaard', color: '#CCFF66', companies: ['Commonwealth Fusion Systems']},
        {id: 'David Kirtley', color: '#CCFF66', companies: ['Helion Energy']},
        {id: 'Nicole Pualk', color: '#66CCFF', companies: ['Siren Biotechnology']},
        {id: 'Josha Bach', color: '#FFCC66', companies: ['Artificial Intelligence Researcher']},
        {id: 'Adena Hefets', color: '#66FFCC', companies: ['Divvy Homes']}
    ];

    var companies = {
        'Facebook': '#FF0000',
        'Social Capital': '#FF0000',
        'Virgin Galactic': '#FF0000',
        'Slack': '#FF0000',
        'Cruise Automation': '#FF0000',
        'Robinhood': '#FF0000',
        'Ginkgo Bioworks': '#FF0000',
        'OpenSea': '#FF0000',
        'Comma.ai': '#00FF00',
        'OpenAI': '#0000FF',
        'Weblogs, Inc.': '#FFFF00',
        'Mahalo.com': '#FFFF00',
        'Inside.com': '#FFFF00',
        'Uber': '#FFFF00',
        'Wealthfront': '#FFFF00',
        'AngelList': '#FFFF00',
        'Thumbtack': '#FFFF00',
        'Bridgewater Associates': '#FF00FF',
        'Zip2 Corporation': '#FF9900',
        'SpaceX': '#FF9900',
        'Tesla, Inc.': '#FF9900',
        'Neuralink': '#FF9900',
        'The Boring Company': '#FF9900',
        'Twitter': '#FF9900',
        'U.S. Department of the Treasury': '#9900FF',
        'National Economic Council': '#9900FF',
        'Harvard University': '#9900FF',
        'PayPal': '#00FFFF',
        'Yammer': '#00FFFF',
        'Zenefits': '#00FFFF',
        'Airbnb': '#00FFFF',
        'Stripe': '#00FFFF',
        'Instacart': '#00FFFF',
        'The Climate Corporation': '#FF6666',
        'Metromile': '#FF6666',
        'Roivant Sciences': '#66FF66',
        'CNN': '#6666FF',
        'Aspen Institute': '#6666FF',
        'MIT': '#FFFF66',
        'Goop': '#FF3366',
        'Coinbase': '#6633FF',
        'MrBeast YouTube Channel': '#66FFFF',
        'PEAK6': '#3399FF',
        'Apex Fintech Solutions': '#3399FF',
        'Evil Geniuses': '#3399FF',
        'Zogo': '#3399FF',
        'Poker Power': '#3399FF',
        'Benchmark Capital': '#FF9966',
        'United States Nuclear Industry Council': '#66FF99',
        'Loopt': '#9966FF',
        'Y Combinator': '#9966FF',
        'Commonwealth Fusion Systems': '#CCFF66',
        'Helion Energy': '#CCFF66',
        'Siren Biotechnology': '#66CCFF',
        'Artificial Intelligence Researcher': '#FFCC66',
        'Divvy Homes': '#66FFCC',
        'IBM': '#FF66CC',
        'Google': '#FF6666',
        'All-In Podcast': '#FF0000', 
    };

    var elements = [];

    // Create nodes for individuals
    individuals.forEach(function(individual){
        elements.push({data: {id: individual.id, label: individual.id, color: individual.color}});
    });

    // Create nodes for companies
    for(var company in companies){
        elements.push({data: {id: company, label: company, color: companies[company]}});
    }

    // Create edges connecting individuals to companies
    individuals.forEach(function(individual){
        individual.companies.forEach(function(company){
            elements.push({data: {source: individual.id, target: company, color: individual.color}});
        });
    });

    var cy = cytoscape({
        container: document.getElementById('cy'),
        elements: elements,
        style: [
            {
                selector: 'node',
                style: {
                    'background-color': 'data(color)',
                    'label': 'data(label)',
                    'text-valign': 'center',
                    'color': '#000000',
                    'text-wrap': 'wrap',
                    'text-max-width': 80,
                    'width': 60, // Adjust this value
                    'height': 60, // Adjust this value
                    'padding': '10px'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': 'data(color)',
                    'target-arrow-color': 'data(color)',
                    'curve-style': 'bezier'
                }
            }
        ],
        layout: {
            name: 'cose'
        }
    });
});
