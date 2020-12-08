//how I reformatted the data

var inputEl = $("pre")

var inputString = inputEl.innerText

var splitInput = inputString.split('\n')

var finalInput = splitInput.reduce((bags, bag) => {
    var stringNoPeriod = bag.substring(0, bag.length - 1);
    var splitString = stringNoPeriod.split(' bags contain ')
    var bagAndBags = splitString[1].split(', ');

    var formattedBag = bagAndBags.reduce((acc, bag) => {
      const splitBag = bag.split(' ');
      splitBag.pop();
      const joinedBag = splitBag.join(' ')
      const num = joinedBag.substring(0, 1);
      acc[joinedBag.substring(2, joinedBag.length)] = num;
      return acc;
    }, {});
    bags[splitString[0]] = formattedBag
    return bags;
}, {});

var finalInputKeys = Object.keys(finalInput);

finalInputKeys.forEach(key => {
    if (finalInput[key][' other bag']) {
        finalInput[key] = {'no other bag': 'n'}
    }

});

const shinyGoldBag = {
    "mirrored bronze": "1",
    "dull aqua": "4",
    "dotted indigo": "2",
    "light indigo": "1"
  }


var input = {
  "light plum": {
    "faded blue": "1"
  },
  "muted salmon": {
    "faded lavender": "4",
    "posh magenta": "4"
  },
  "wavy gray": {
    "dotted teal": "2"
  },
  "wavy tan": {
    "plaid aqua": "2"
  },
  "wavy purple": {
    "drab white": "1",
    "muted yellow": "4",
    "wavy aqua": "2"
  },
  "dull fuchsia": {
    "bright indigo": "2",
    "plaid cyan": "3",
    "light gold": "1"
  },
  "striped plum": {
    "dull coral": "1",
    "drab salmon": "2"
  },
  "mirrored gold": {
    "faded tan": "2",
    "dull aqua": "1"
  },
  "dim blue": {
    "dotted gray": "3",
    "mirrored turquoise": "2"
  },
  "dark olive": {
    "bright cyan": "2"
  },
  "dotted orange": {
    "pale lime": "2"
  },
  "vibrant aqua": {
    "posh plum": "5",
    "faded tomato": "5",
    "shiny tomato": "5",
    "mirrored orange": "1"
  },
  "striped gray": {
    "drab tomato": "5"
  },
  "light beige": {
    "drab aqua": "1",
    "striped yellow": "5",
    "bright indigo": "5"
  },
  "dotted brown": {
    "dim tan": "5",
    "dim violet": "1",
    "dull turquoise": "2",
    "dark olive": "3"
  },
  "dark turquoise": {
    "light bronze": "1"
  },
  "vibrant beige": {
    "wavy indigo": "3",
    "striped gray": "5"
  },
  "dotted plum": {
    "mirrored green": "2",
    "dull crimson": "2",
    "drab tan": "2",
    "vibrant coral": "1"
  },
  "dull indigo": {
    "vibrant gold": "2",
    "dim chartreuse": "1",
    "bright brown": "3",
    "dim turquoise": "2"
  },
  "wavy olive": {
    "dotted indigo": "2",
    "vibrant beige": "4",
    "dotted gray": "1"
  },
  "posh olive": {
    "muted magenta": "4",
    "dim cyan": "5",
    "drab bronze": "3",
    "pale lime": "2"
  },
  "dotted silver": {
    "light brown": "3"
  },
  "dim purple": {
    "clear lavender": "5",
    "drab aqua": "4",
    "mirrored bronze": "1"
  },
  "wavy green": {
    "plaid white": "4",
    "clear cyan": "3",
    "striped gray": "1",
    "clear coral": "4"
  },
  "dark brown": {
    "light brown": "4",
    "light magenta": "2",
    "dotted gold": "3"
  },
  "dark aqua": {
    "dull coral": "1",
    "shiny coral": "4",
    "vibrant crimson": "3",
    "muted black": "2"
  },
  "shiny gray": {
    "dark gray": "1",
    "pale purple": "4"
  },
  "posh brown": {
    "posh magenta": "1",
    "wavy bronze": "5",
    "posh yellow": "5"
  },
  "clear turquoise": {
    "shiny tan": "1",
    "muted salmon": "1"
  },
  "dotted teal": {
    "bright tan": "5",
    "vibrant crimson": "5"
  },
  "drab coral": {
    "striped brown": "1",
    "light lime": "1",
    "faded green": "1"
  },
  "dull plum": {
    "vibrant silver": "5"
  },
  "bright orange": {
    "dark yellow": "2",
    "mirrored silver": "4",
    "mirrored cyan": "4",
    "striped tomato": "2"
  },
  "drab bronze": {
    "drab violet": "2",
    "striped bronze": "2"
  },
  "dim tan": {
    "shiny black": "1",
    "posh aqua": "5"
  },
  "clear indigo": {
    "clear tan": "4",
    "vibrant silver": "5",
    "striped orange": "2",
    "dotted lavender": "2"
  },
  "muted violet": {
    "mirrored white": "4",
    "dim blue": "1",
    "faded beige": "4"
  },
  "posh aqua": {
    "striped fuchsia": "4",
    "pale red": "4",
    "muted coral": "5"
  },
  "mirrored purple": {
    "dim beige": "5",
    "shiny brown": "5",
    "posh indigo": "5",
    "clear turquoise": "3"
  },
  "vibrant orange": {
    "dark turquoise": "1",
    "dotted olive": "1",
    "dull coral": "3",
    "dark chartreuse": "3"
  },
  "light tomato": {
    "mirrored lime": "4",
    "pale beige": "3",
    "clear magenta": "4"
  },
  "drab indigo": {
    "mirrored blue": "5",
    "dull salmon": "1"
  },
  "bright red": {
    "pale gold": "3",
    "dim fuchsia": "5",
    "mirrored aqua": "5",
    "shiny gold": "4"
  },
  "clear silver": {
    "dotted brown": "3",
    "dull olive": "3"
  },
  "vibrant salmon": {
    "shiny tan": "3",
    "dotted gray": "4",
    "wavy violet": "3",
    "light gray": "5"
  },
  "vibrant tan": {
    "wavy purple": "1",
    "bright plum": "2",
    "dim turquoise": "3"
  },
  "wavy maroon": {
    "striped fuchsia": "4"
  },
  "mirrored red": {
    "vibrant coral": "3",
    "dotted crimson": "2",
    "striped orange": "3",
    "clear olive": "2"
  },
  "shiny tan": {
    "striped fuchsia": "5",
    "drab chartreuse": "4",
    "drab tomato": "2",
    "muted crimson": "5"
  },
  "dull black": {
    "shiny teal": "2"
  },
  "shiny coral": {
    "posh blue": "4",
    "dotted coral": "1"
  },
  "mirrored blue": {
    "posh chartreuse": "4"
  },
  "striped fuchsia": {
    "muted lime": "4",
    "shiny crimson": "2"
  },
  "shiny lavender": {
    "vibrant yellow": "1",
    "clear turquoise": "1"
  },
  "dark tomato": {
    "clear brown": "5"
  },
  "shiny indigo": {
    "pale orange": "3"
  },
  "posh fuchsia": {
    "vibrant blue": "2",
    "striped black": "5",
    "dim turquoise": "3",
    "pale black": "5"
  },
  "muted plum": {
    "dim turquoise": "5",
    "posh fuchsia": "1"
  },
  "posh tomato": {
    "faded yellow": "1",
    "vibrant blue": "1",
    "clear coral": "1"
  },
  "dotted gold": {
    "dull tomato": "3",
    "striped tomato": "5",
    "wavy purple": "5"
  },
  "striped lime": {
    "faded salmon": "3",
    "plaid gold": "1",
    "wavy aqua": "4",
    "bright beige": "3"
  },
  "posh violet": {
    "dim purple": "5"
  },
  "mirrored chartreuse": {
    "dark bronze": "1"
  },
  "posh purple": {
    "posh fuchsia": "4",
    "posh magenta": "4",
    "mirrored cyan": "2"
  },
  "bright indigo": {
    "drab white": "5",
    "posh tan": "1"
  },
  "dark indigo": {
    "clear tan": "1",
    "wavy teal": "2"
  },
  "dark beige": {
    "bright olive": "1",
    "posh purple": "5"
  },
  "clear crimson": {
    "muted black": "4",
    "posh purple": "4",
    "striped black": "1",
    "bright black": "5"
  },
  "shiny green": {
    "dark orange": "2",
    "bright silver": "2",
    "dim orange": "3"
  },
  "plaid crimson": {
    "muted cyan": "5",
    "striped orange": "3",
    "dull lavender": "4",
    "wavy magenta": "5"
  },
  "clear tomato": {
    "posh fuchsia": "2",
    "dark orange": "2",
    "pale black": "3",
    "dull aqua": "2"
  },
  "vibrant gold": {
    "faded brown": "1"
  },
  "pale salmon": {
    "dull coral": "4",
    "posh fuchsia": "2",
    "plaid tan": "2"
  },
  "light cyan": {
    "plaid magenta": "4"
  },
  "dim teal": {
    "posh bronze": "1",
    "mirrored green": "4",
    "dull black": "5",
    "clear gray": "1"
  },
  "plaid lime": {
    "wavy orange": "3",
    "pale blue": "5",
    "plaid gold": "1"
  },
  "light tan": {
    "faded crimson": "4",
    "plaid fuchsia": "1",
    "bright aqua": "1",
    "dotted blue": "2"
  },
  "shiny brown": {
    "mirrored bronze": "3",
    "light coral": "3"
  },
  "bright plum": {
    "posh gray": "3",
    "faded brown": "3",
    "plaid magenta": "3"
  },
  "bright beige": {
    "dotted coral": "5"
  },
  "drab tomato": {
    "no other bag": "n"
  },
  "pale beige": {
    "drab bronze": "3"
  },
  "dotted aqua": {
    "plaid yellow": "5"
  },
  "striped yellow": {
    "dull tan": "2",
    "posh violet": "2",
    "pale violet": "2",
    "clear lavender": "2"
  },
  "vibrant maroon": {
    "muted green": "4",
    "muted cyan": "1",
    "mirrored tomato": "1"
  },
  "plaid green": {
    "dotted black": "2"
  },
  "dotted indigo": {
    "mirrored tan": "5",
    "dim yellow": "3"
  },
  "vibrant coral": {
    "drab blue": "3",
    "striped gray": "3",
    "clear plum": "1",
    "faded tomato": "2"
  },
  "pale maroon": {
    "shiny black": "5"
  },
  "posh black": {
    "posh green": "2",
    "posh tomato": "1",
    "dim gold": "4",
    "wavy olive": "5"
  },
  "wavy aqua": {
    "faded green": "5",
    "pale lavender": "4",
    "plaid aqua": "5",
    "mirrored brown": "3"
  },
  "clear green": {
    "pale lime": "3"
  },
  "dim beige": {
    "vibrant beige": "4",
    "dull aqua": "3",
    "mirrored orange": "1",
    "dim yellow": "2"
  },
  "dim chartreuse": {
    "dark maroon": "5",
    "dark crimson": "1",
    "wavy teal": "5",
    "clear aqua": "3"
  },
  "bright turquoise": {
    "dim turquoise": "1",
    "dull turquoise": "3"
  },
  "bright magenta": {
    "striped fuchsia": "2",
    "dim brown": "5"
  },
  "light fuchsia": {
    "drab tomato": "2",
    "dim chartreuse": "5"
  },
  "vibrant magenta": {
    "pale red": "2",
    "dim turquoise": "4",
    "drab blue": "4",
    "drab aqua": "3"
  },
  "muted gold": {
    "pale gray": "3",
    "dim salmon": "4"
  },
  "vibrant violet": {
    "mirrored gray": "4",
    "wavy aqua": "2",
    "drab tan": "3"
  },
  "wavy cyan": {
    "pale fuchsia": "3",
    "mirrored tan": "1",
    "dull blue": "2",
    "dull cyan": "2"
  },
  "light silver": {
    "faded brown": "2",
    "mirrored white": "3",
    "plaid maroon": "5",
    "plaid plum": "3"
  },
  "mirrored lavender": {
    "shiny tan": "1",
    "dim turquoise": "2",
    "shiny coral": "1",
    "striped brown": "1"
  },
  "dull teal": {
    "striped purple": "2",
    "dark plum": "5",
    "bright purple": "5",
    "light bronze": "4"
  },
  "light indigo": {
    "no other bag": "n"
  },
  "shiny silver": {
    "dim maroon": "2"
  },
  "wavy brown": {
    "posh lavender": "1",
    "dark bronze": "2",
    "mirrored chartreuse": "4"
  },
  "dull lavender": {
    "dull cyan": "3",
    "drab lavender": "1"
  },
  "posh gold": {
    "mirrored cyan": "1",
    "bright salmon": "5",
    "dotted orange": "4"
  },
  "dim yellow": {
    "no other bag": "n"
  },
  "vibrant crimson": {
    "drab lavender": "1",
    "wavy purple": "4",
    "clear red": "5",
    "posh gray": "4"
  },
  "plaid gold": {
    "striped fuchsia": "4",
    "drab tomato": "5",
    "light indigo": "3",
    "mirrored bronze": "3"
  },
  "vibrant indigo": {
    "faded yellow": "4",
    "clear salmon": "4",
    "plaid lavender": "4"
  },
  "dark crimson": {
    "posh fuchsia": "1",
    "drab silver": "2",
    "shiny coral": "5"
  },
  "vibrant white": {
    "dim orange": "3",
    "shiny tomato": "2",
    "dark teal": "5",
    "faded aqua": "5"
  },
  "pale chartreuse": {
    "dim cyan": "2",
    "faded red": "2",
    "light yellow": "3",
    "wavy yellow": "4"
  },
  "drab chartreuse": {
    "pale black": "2"
  },
  "drab gray": {
    "posh indigo": "4",
    "muted maroon": "3",
    "striped teal": "5",
    "striped lime": "5"
  },
  "dim tomato": {
    "plaid tan": "4",
    "vibrant turquoise": "4",
    "mirrored salmon": "2",
    "dull magenta": "2"
  },
  "plaid purple": {
    "posh blue": "3"
  },
  "dark lavender": {
    "muted green": "4",
    "dim crimson": "2",
    "dull gray": "5"
  },
  "bright maroon": {
    "drab tomato": "5",
    "vibrant red": "4",
    "light lime": "5"
  },
  "striped chartreuse": {
    "striped black": "5"
  },
  "dull salmon": {
    "drab lime": "3",
    "wavy crimson": "5"
  },
  "clear beige": {
    "dim orange": "4"
  },
  "light orange": {
    "plaid gold": "1",
    "shiny coral": "5"
  },
  "faded red": {
    "bright tan": "3"
  },
  "wavy violet": {
    "plaid chartreuse": "5"
  },
  "dim violet": {
    "pale lavender": "1"
  },
  "posh indigo": {
    "muted plum": "4",
    "plaid cyan": "1",
    "mirrored turquoise": "2",
    "light teal": "2"
  },
  "muted aqua": {
    "striped black": "5",
    "wavy purple": "4",
    "mirrored silver": "4",
    "wavy bronze": "4"
  },
  "faded gold": {
    "wavy indigo": "5",
    "dark olive": "2",
    "mirrored orange": "5"
  },
  "bright teal": {
    "dotted coral": "5",
    "clear lavender": "4",
    "pale black": "1",
    "light indigo": "5"
  },
  "dotted green": {
    "dotted brown": "3",
    "mirrored chartreuse": "1",
    "vibrant gray": "5",
    "mirrored tan": "2"
  },
  "drab yellow": {
    "wavy maroon": "1",
    "posh chartreuse": "4"
  },
  "dull maroon": {
    "dotted blue": "1",
    "pale chartreuse": "4",
    "drab teal": "5"
  },
  "clear black": {
    "pale magenta": "3",
    "vibrant silver": "5"
  },
  "dull orange": {
    "vibrant lime": "4",
    "shiny gold": "4",
    "light coral": "4",
    "striped brown": "4"
  },
  "clear violet": {
    "muted plum": "3",
    "dim teal": "3"
  },
  "muted bronze": {
    "mirrored salmon": "5",
    "dim tan": "5"
  },
  "plaid lavender": {
    "posh violet": "3"
  },
  "muted brown": {
    "striped brown": "5",
    "mirrored green": "5",
    "light orange": "2"
  },
  "clear chartreuse": {
    "muted lime": "2"
  },
  "shiny chartreuse": {
    "wavy coral": "1",
    "light salmon": "4",
    "plaid cyan": "5"
  },
  "clear tan": {
    "dotted black": "4"
  },
  "dull tan": {
    "posh maroon": "1",
    "dotted coral": "1"
  },
  "wavy black": {
    "dull chartreuse": "1",
    "drab plum": "3"
  },
  "faded fuchsia": {
    "mirrored violet": "4",
    "dim lavender": "2"
  },
  "pale brown": {
    "dotted olive": "1",
    "bright fuchsia": "2"
  },
  "faded green": {
    "dim turquoise": "5",
    "mirrored blue": "2",
    "mirrored tan": "1",
    "mirrored silver": "5"
  },
  "clear brown": {
    "vibrant lime": "3",
    "muted maroon": "2",
    "dull coral": "3",
    "faded plum": "3"
  },
  "vibrant silver": {
    "clear coral": "2",
    "muted yellow": "1",
    "drab cyan": "2",
    "mirrored orange": "4"
  },
  "bright crimson": {
    "posh olive": "1",
    "faded beige": "3",
    "dim black": "1",
    "shiny silver": "1"
  },
  "dim gold": {
    "posh beige": "2",
    "dull coral": "1",
    "plaid aqua": "1"
  },
  "drab white": {
    "dim yellow": "1",
    "posh gray": "2"
  },
  "dim indigo": {
    "shiny brown": "3",
    "drab red": "1",
    "pale aqua": "2",
    "plaid lime": "4"
  },
  "dull blue": {
    "pale fuchsia": "2",
    "faded tomato": "1",
    "plaid aqua": "4"
  },
  "mirrored bronze": {
    "bright tan": "5",
    "plaid magenta": "2"
  },
  "vibrant turquoise": {
    "shiny brown": "5",
    "vibrant beige": "2",
    "dotted magenta": "2",
    "dull lavender": "3"
  },
  "dull turquoise": {
    "clear lavender": "4",
    "striped gray": "3",
    "posh gray": "3"
  },
  "dim lavender": {
    "plaid lime": "3",
    "mirrored red": "4",
    "pale orange": "3"
  },
  "clear lime": {
    "drab fuchsia": "3",
    "plaid gray": "3",
    "light beige": "1",
    "muted violet": "3"
  },
  "wavy fuchsia": {
    "bright gray": "3",
    "faded purple": "1",
    "posh purple": "4",
    "light tan": "4"
  },
  "plaid beige": {
    "drab bronze": "2"
  },
  "faded beige": {
    "posh bronze": "1",
    "mirrored bronze": "3",
    "shiny black": "3"
  },
  "posh blue": {
    "shiny gold": "3",
    "shiny black": "2"
  },
  "dull silver": {
    "wavy crimson": "2",
    "faded black": "5"
  },
  "pale fuchsia": {
    "dull black": "5"
  },
  "bright green": {
    "bright black": "3",
    "drab tan": "4"
  },
  "mirrored violet": {
    "pale teal": "4",
    "dotted crimson": "3",
    "posh violet": "2",
    "shiny silver": "2"
  },
  "pale violet": {
    "posh magenta": "4",
    "wavy crimson": "5",
    "drab aqua": "3"
  },
  "faded white": {
    "drab purple": "1",
    "shiny chartreuse": "5"
  },
  "faded tomato": {
    "bright teal": "2"
  },
  "faded violet": {
    "plaid salmon": "2"
  },
  "drab turquoise": {
    "mirrored green": "1"
  },
  "mirrored silver": {
    "dull aqua": "5",
    "dark orange": "1",
    "pale red": "3",
    "dim yellow": "4"
  },
  "dotted violet": {
    "plaid chartreuse": "5",
    "mirrored tan": "1",
    "dotted lavender": "5"
  },
  "plaid olive": {
    "mirrored cyan": "1",
    "muted orange": "2",
    "posh maroon": "2"
  },
  "pale silver": {
    "dull lavender": "3",
    "mirrored olive": "4",
    "muted coral": "4"
  },
  "mirrored coral": {
    "pale fuchsia": "1",
    "dull turquoise": "1"
  },
  "drab crimson": {
    "wavy purple": "1",
    "wavy violet": "1",
    "vibrant gold": "2",
    "bright salmon": "3"
  },
  "dull chartreuse": {
    "faded salmon": "4",
    "light lime": "3",
    "mirrored brown": "1"
  },
  "bright purple": {
    "light cyan": "2"
  },
  "dull brown": {
    "bright white": "3"
  },
  "muted magenta": {
    "shiny gold": "3",
    "muted plum": "4",
    "pale lime": "5",
    "light cyan": "2"
  },
  "pale aqua": {
    "drab blue": "4",
    "bright lavender": "1"
  },
  "drab purple": {
    "mirrored bronze": "2",
    "drab violet": "1"
  },
  "dotted chartreuse": {
    "pale chartreuse": "2",
    "clear beige": "5"
  },
  "shiny purple": {
    "clear black": "5"
  },
  "muted blue": {
    "dotted indigo": "4"
  },
  "striped blue": {
    "vibrant beige": "4",
    "plaid lime": "3"
  },
  "dull gold": {
    "drab violet": "4",
    "pale aqua": "3",
    "mirrored cyan": "3"
  },
  "plaid tan": {
    "shiny gold": "5"
  },
  "mirrored brown": {
    "pale lime": "3",
    "dull coral": "2"
  },
  "mirrored white": {
    "muted black": "5",
    "dark yellow": "1",
    "drab blue": "4",
    "clear bronze": "4"
  },
  "pale yellow": {
    "clear tomato": "4",
    "drab salmon": "1",
    "plaid crimson": "1"
  },
  "faded silver": {
    "dotted indigo": "5",
    "posh chartreuse": "3"
  },
  "mirrored orange": {
    "drab tomato": "4"
  },
  "dotted lime": {
    "faded tomato": "3",
    "vibrant beige": "4",
    "posh chartreuse": "5"
  },
  "muted coral": {
    "muted plum": "1"
  },
  "bright tomato": {
    "posh red": "1",
    "light red": "4",
    "dotted fuchsia": "1",
    "dull turquoise": "4"
  },
  "plaid orange": {
    "shiny salmon": "4",
    "muted tomato": "4",
    "dull gold": "4",
    "clear green": "3"
  },
  "plaid teal": {
    "shiny black": "1",
    "wavy purple": "4",
    "dark plum": "3",
    "pale silver": "4"
  },
  "muted tan": {
    "faded salmon": "5",
    "dotted magenta": "4",
    "clear gold": "3",
    "dotted tan": "3"
  },
  "faded olive": {
    "clear lavender": "1"
  },
  "muted olive": {
    "drab coral": "4",
    "light yellow": "5"
  },
  "posh salmon": {
    "dim turquoise": "3",
    "vibrant purple": "1",
    "bright maroon": "2",
    "drab lime": "2"
  },
  "dim crimson": {
    "dull white": "5",
    "dim yellow": "1",
    "dark green": "5"
  },
  "light brown": {
    "drab tan": "1"
  },
  "light bronze": {
    "vibrant silver": "2",
    "muted plum": "1",
    "drab blue": "3",
    "dull yellow": "5"
  },
  "faded lime": {
    "bright teal": "3",
    "light aqua": "2"
  },
  "clear gold": {
    "dim cyan": "1",
    "striped brown": "3"
  },
  "clear coral": {
    "mirrored bronze": "4",
    "posh magenta": "5",
    "striped purple": "5"
  },
  "striped cyan": {
    "wavy violet": "1",
    "drab yellow": "4"
  },
  "bright coral": {
    "dotted lime": "4",
    "striped chartreuse": "3"
  },
  "faded bronze": {
    "vibrant beige": "1",
    "dotted green": "4",
    "dotted gold": "4",
    "shiny turquoise": "1"
  },
  "dark red": {
    "pale salmon": "3",
    "bright green": "5"
  },
  "posh cyan": {
    "plaid fuchsia": "3"
  },
  "clear teal": {
    "plaid aqua": "5",
    "posh tomato": "1",
    "shiny olive": "2",
    "shiny turquoise": "4"
  },
  "dotted turquoise": {
    "dim blue": "5",
    "bright teal": "5",
    "dull coral": "2"
  },
  "wavy silver": {
    "posh aqua": "5"
  },
  "shiny cyan": {
    "clear crimson": "5",
    "vibrant purple": "4",
    "mirrored turquoise": "3",
    "plaid aqua": "5"
  },
  "mirrored beige": {
    "dim green": "2",
    "dull teal": "1"
  },
  "plaid turquoise": {
    "dark yellow": "1"
  },
  "dim white": {
    "posh indigo": "5",
    "bright cyan": "4",
    "dim orange": "5",
    "dim teal": "2"
  },
  "faded tan": {
    "dim salmon": "4",
    "plaid blue": "2"
  },
  "faded yellow": {
    "posh gray": "1",
    "dim beige": "4"
  },
  "dull tomato": {
    "pale indigo": "2",
    "striped bronze": "2",
    "wavy maroon": "1",
    "posh tomato": "5"
  },
  "posh lavender": {
    "faded blue": "4",
    "striped teal": "4",
    "plaid chartreuse": "5"
  },
  "mirrored magenta": {
    "dim magenta": "2"
  },
  "drab violet": {
    "shiny black": "3",
    "mirrored silver": "1"
  },
  "pale coral": {
    "dim gold": "5"
  },
  "clear red": {
    "muted maroon": "4"
  },
  "dark yellow": {
    "striped black": "5",
    "clear plum": "2"
  },
  "dull coral": {
    "bright teal": "5",
    "shiny black": "2",
    "drab tomato": "3",
    "dotted coral": "4"
  },
  "dotted bronze": {
    "bright black": "3",
    "dull orange": "3",
    "mirrored indigo": "3"
  },
  "dull green": {
    "clear teal": "4",
    "muted silver": "5",
    "pale blue": "2",
    "light plum": "2"
  },
  "wavy gold": {
    "pale red": "5",
    "dim salmon": "3",
    "striped orange": "2",
    "bright beige": "4"
  },
  "plaid aqua": {
    "pale black": "4",
    "clear tomato": "2",
    "faded beige": "1"
  },
  "wavy tomato": {
    "posh turquoise": "5"
  },
  "wavy white": {
    "dim maroon": "2"
  },
  "dull beige": {
    "wavy brown": "3"
  },
  "light olive": {
    "dim white": "5",
    "dark fuchsia": "4",
    "dull magenta": "4",
    "light lavender": "5"
  },
  "mirrored lime": {
    "vibrant coral": "5"
  },
  "light black": {
    "dark salmon": "2"
  },
  "bright gold": {
    "dark orange": "3",
    "shiny black": "5",
    "bright silver": "2",
    "pale black": "3"
  },
  "dull lime": {
    "posh bronze": "2",
    "mirrored blue": "2"
  },
  "posh chartreuse": {
    "light lime": "3",
    "bright lavender": "3",
    "posh fuchsia": "3"
  },
  "clear orange": {
    "dull maroon": "1",
    "faded yellow": "1"
  },
  "striped red": {
    "dotted cyan": "2",
    "dull silver": "3",
    "light blue": "2"
  },
  "pale turquoise": {
    "wavy silver": "4",
    "dotted teal": "3",
    "light green": "4"
  },
  "wavy crimson": {
    "light cyan": "1",
    "posh beige": "2"
  },
  "light turquoise": {
    "dull orange": "1"
  },
  "dotted coral": {
    "drab tomato": "1",
    "dim yellow": "5",
    "bright lavender": "5"
  },
  "dotted tan": {
    "light coral": "4",
    "dim cyan": "4",
    "vibrant beige": "3"
  },
  "drab blue": {
    "dim turquoise": "1"
  },
  "pale white": {
    "clear olive": "3",
    "clear coral": "2",
    "dark olive": "5",
    "wavy white": "2"
  },
  "muted orange": {
    "dim gold": "2"
  },
  "faded black": {
    "wavy aqua": "2",
    "vibrant bronze": "5",
    "mirrored blue": "5"
  },
  "posh lime": {
    "dim salmon": "2",
    "pale orange": "2",
    "wavy maroon": "4",
    "dim coral": "1"
  },
  "wavy indigo": {
    "muted lime": "2"
  },
  "faded orange": {
    "light green": "1",
    "plaid turquoise": "5",
    "posh turquoise": "4"
  },
  "light blue": {
    "plaid fuchsia": "1",
    "mirrored salmon": "4",
    "muted chartreuse": "1"
  },
  "light violet": {
    "dotted black": "3",
    "posh black": "3"
  },
  "posh bronze": {
    "striped purple": "3",
    "posh purple": "5",
    "plaid magenta": "2",
    "dull aqua": "3"
  },
  "shiny fuchsia": {
    "dim olive": "5",
    "plaid silver": "2",
    "dark cyan": "1",
    "pale red": "1"
  },
  "vibrant gray": {
    "drab blue": "2"
  },
  "faded salmon": {
    "drab aqua": "1",
    "mirrored blue": "1"
  },
  "dark white": {
    "dim orange": "4",
    "plaid magenta": "4",
    "clear tomato": "2"
  },
  "muted indigo": {
    "dotted violet": "4"
  },
  "dull white": {
    "shiny cyan": "2",
    "shiny orange": "3"
  },
  "faded plum": {
    "dim cyan": "3",
    "dark yellow": "2"
  },
  "muted silver": {
    "drab red": "2",
    "dark gray": "3",
    "striped teal": "4"
  },
  "wavy lavender": {
    "drab turquoise": "1"
  },
  "striped beige": {
    "dim turquoise": "2",
    "muted plum": "1",
    "posh violet": "4"
  },
  "dark gray": {
    "posh fuchsia": "3",
    "striped brown": "2"
  },
  "plaid yellow": {
    "vibrant red": "3",
    "dark gold": "5"
  },
  "dark violet": {
    "mirrored orange": "2",
    "muted crimson": "2",
    "pale white": "1",
    "pale chartreuse": "1"
  },
  "shiny maroon": {
    "dim tan": "4"
  },
  "dotted fuchsia": {
    "bright lime": "4",
    "dotted lime": "3",
    "bright maroon": "2",
    "drab yellow": "5"
  },
  "light yellow": {
    "dotted coral": "1",
    "bright lavender": "1",
    "pale violet": "3"
  },
  "shiny blue": {
    "shiny crimson": "1"
  },
  "dotted black": {
    "muted aqua": "4",
    "light lime": "2",
    "posh turquoise": "3",
    "light silver": "1"
  },
  "pale purple": {
    "striped violet": "2",
    "clear lavender": "5"
  },
  "pale red": {
    "bright tan": "4",
    "pale black": "4",
    "mirrored cyan": "4",
    "dotted coral": "3"
  },
  "dim gray": {
    "dull cyan": "3",
    "dotted purple": "3",
    "shiny brown": "2",
    "plaid tan": "2"
  },
  "posh tan": {
    "light coral": "2",
    "bright black": "2",
    "dim yellow": "2"
  },
  "vibrant black": {
    "pale crimson": "4",
    "mirrored brown": "2",
    "plaid violet": "4",
    "muted yellow": "3"
  },
  "dark salmon": {
    "mirrored brown": "2",
    "clear salmon": "5",
    "drab yellow": "5"
  },
  "dim green": {
    "pale indigo": "5",
    "pale coral": "5",
    "plaid lavender": "5"
  },
  "plaid fuchsia": {
    "muted maroon": "2",
    "muted crimson": "3",
    "dim black": "3"
  },
  "faded maroon": {
    "mirrored purple": "3",
    "faded tan": "5"
  },
  "dark maroon": {
    "dull lavender": "5",
    "clear plum": "4",
    "shiny silver": "3"
  },
  "pale magenta": {
    "light indigo": "1"
  },
  "dim salmon": {
    "vibrant red": "2",
    "light lime": "1"
  },
  "dotted lavender": {
    "drab tan": "4",
    "mirrored olive": "1",
    "plaid gold": "5"
  },
  "faded aqua": {
    "dim purple": "5"
  },
  "plaid brown": {
    "shiny green": "2",
    "faded tomato": "3",
    "wavy orange": "4"
  },
  "striped purple": {
    "posh gray": "4",
    "light lime": "1"
  },
  "muted yellow": {
    "pale indigo": "2",
    "vibrant blue": "3",
    "muted coral": "2"
  },
  "dark gold": {
    "striped teal": "4",
    "bright maroon": "4"
  },
  "mirrored indigo": {
    "dim white": "5",
    "wavy white": "4",
    "bright purple": "4"
  },
  "mirrored tomato": {
    "drab turquoise": "1",
    "drab cyan": "1",
    "dotted teal": "1"
  },
  "striped white": {
    "shiny silver": "1",
    "faded gold": "1"
  },
  "pale plum": {
    "shiny brown": "2",
    "posh fuchsia": "1"
  },
  "bright gray": {
    "posh chartreuse": "4",
    "dull turquoise": "4"
  },
  "shiny olive": {
    "plaid yellow": "3",
    "dotted fuchsia": "4",
    "bright beige": "2"
  },
  "faded crimson": {
    "faded blue": "4",
    "faded gray": "5",
    "dotted lime": "1",
    "wavy magenta": "1"
  },
  "striped coral": {
    "dull fuchsia": "1",
    "striped fuchsia": "4",
    "dull gold": "1",
    "posh lime": "5"
  },
  "posh orange": {
    "dim yellow": "4",
    "posh tan": "2"
  },
  "striped tan": {
    "vibrant coral": "5",
    "posh violet": "5",
    "plaid aqua": "4",
    "dark crimson": "4"
  },
  "shiny yellow": {
    "dull silver": "3",
    "dim purple": "3",
    "vibrant violet": "3"
  },
  "shiny black": {
    "mirrored cyan": "3",
    "clear gray": "1",
    "light cyan": "2"
  },
  "posh silver": {
    "posh blue": "1"
  },
  "mirrored cyan": {
    "pale lime": "5",
    "drab aqua": "1",
    "muted lime": "4"
  },
  "dark plum": {
    "muted green": "3"
  },
  "clear white": {
    "wavy crimson": "5",
    "plaid salmon": "3",
    "plaid silver": "4",
    "faded beige": "3"
  },
  "plaid plum": {
    "dim salmon": "2",
    "faded black": "1",
    "plaid purple": "2",
    "dull lavender": "5"
  },
  "dim turquoise": {
    "pale indigo": "2",
    "striped black": "4"
  },
  "vibrant green": {
    "clear purple": "5",
    "pale brown": "4",
    "drab olive": "2",
    "dotted brown": "3"
  },
  "dark lime": {
    "dull blue": "4",
    "wavy chartreuse": "4",
    "bright olive": "1"
  },
  "shiny white": {
    "muted magenta": "2",
    "clear gray": "4",
    "mirrored bronze": "1",
    "mirrored green": "3"
  },
  "dark orange": {
    "clear gray": "5",
    "posh maroon": "1",
    "vibrant blue": "1"
  },
  "light crimson": {
    "drab tomato": "2",
    "bright tan": "5",
    "striped gray": "5"
  },
  "clear yellow": {
    "muted salmon": "2",
    "mirrored magenta": "1"
  },
  "plaid salmon": {
    "drab tan": "3",
    "dark yellow": "4",
    "dim yellow": "5"
  },
  "faded chartreuse": {
    "dull black": "1",
    "pale lime": "5",
    "wavy olive": "2",
    "shiny green": "4"
  },
  "plaid bronze": {
    "vibrant maroon": "2"
  },
  "striped crimson": {
    "shiny beige": "1"
  },
  "clear magenta": {
    "muted olive": "3",
    "bright olive": "4",
    "pale purple": "5",
    "dark aqua": "3"
  },
  "muted lime": {
    "no other bag": "n"
  },
  "dull yellow": {
    "dark black": "3",
    "wavy orange": "1",
    "posh fuchsia": "5"
  },
  "shiny teal": {
    "posh bronze": "5",
    "striped tomato": "1",
    "dim gold": "2",
    "posh chartreuse": "2"
  },
  "plaid violet": {
    "mirrored bronze": "5",
    "shiny crimson": "5",
    "vibrant blue": "5"
  },
  "posh coral": {
    "bright silver": "5",
    "bright lime": "2"
  },
  "dim magenta": {
    "drab white": "5",
    "faded blue": "1",
    "drab red": "1",
    "light brown": "5"
  },
  "muted turquoise": {
    "shiny beige": "4"
  },
  "posh maroon": {
    "light lime": "2"
  },
  "posh crimson": {
    "wavy lavender": "5",
    "pale orange": "3",
    "plaid magenta": "3"
  },
  "striped black": {
    "no other bag": "n"
  },
  "drab teal": {
    "light olive": "5",
    "clear teal": "3",
    "posh magenta": "2"
  },
  "plaid white": {
    "shiny tan": "1",
    "dotted lavender": "3",
    "wavy olive": "5",
    "clear black": "4"
  },
  "pale olive": {
    "vibrant beige": "4"
  },
  "shiny tomato": {
    "pale lavender": "5",
    "muted fuchsia": "3",
    "drab white": "5"
  },
  "dim coral": {
    "dotted fuchsia": "3"
  },
  "faded blue": {
    "dim maroon": "4",
    "vibrant blue": "3",
    "clear gray": "4"
  },
  "plaid maroon": {
    "dotted indigo": "3",
    "mirrored olive": "1"
  },
  "mirrored teal": {
    "dim olive": "3",
    "posh white": "5",
    "faded plum": "4"
  },
  "mirrored olive": {
    "light indigo": "5",
    "muted lime": "5",
    "wavy indigo": "4"
  },
  "drab aqua": {
    "drab tan": "4",
    "striped gray": "2",
    "pale lime": "1"
  },
  "posh plum": {
    "dim magenta": "5",
    "clear gray": "5"
  },
  "dull olive": {
    "clear black": "1",
    "dim brown": "3"
  },
  "bright chartreuse": {
    "vibrant violet": "5",
    "posh green": "4",
    "pale coral": "5"
  },
  "dull bronze": {
    "dark green": "3"
  },
  "plaid silver": {
    "striped lavender": "4",
    "mirrored orange": "3",
    "muted coral": "5"
  },
  "mirrored fuchsia": {
    "vibrant crimson": "1"
  },
  "drab beige": {
    "light indigo": "4",
    "shiny green": "1"
  },
  "plaid chartreuse": {
    "dark bronze": "2",
    "drab chartreuse": "5"
  },
  "drab magenta": {
    "plaid chartreuse": "3"
  },
  "pale black": {
    "no other bag": "n"
  },
  "dark fuchsia": {
    "dim yellow": "1",
    "dim salmon": "5"
  },
  "clear gray": {
    "bright tan": "3"
  },
  "dark purple": {
    "plaid purple": "4",
    "dark gold": "1"
  },
  "bright tan": {
    "no other bag": "n"
  },
  "clear plum": {
    "posh blue": "1",
    "bright teal": "4"
  },
  "striped brown": {
    "clear tomato": "5",
    "dotted indigo": "1",
    "clear coral": "2"
  },
  "drab silver": {
    "clear lavender": "3",
    "shiny gold": "3",
    "dotted coral": "5",
    "wavy indigo": "5"
  },
  "dotted purple": {
    "mirrored bronze": "2",
    "light red": "4",
    "dim teal": "4",
    "muted indigo": "3"
  },
  "dotted red": {
    "shiny brown": "2",
    "dull tan": "2",
    "wavy coral": "3",
    "pale lime": "2"
  },
  "posh magenta": {
    "clear gray": "3"
  },
  "dim olive": {
    "muted cyan": "4",
    "mirrored brown": "2",
    "dim orange": "3"
  },
  "dotted tomato": {
    "bright fuchsia": "2",
    "dull silver": "5",
    "dim lime": "2"
  },
  "striped magenta": {
    "mirrored red": "3",
    "muted magenta": "1",
    "wavy white": "3"
  },
  "posh red": {
    "bright orange": "3",
    "clear olive": "4",
    "faded violet": "5",
    "plaid coral": "3"
  },
  "muted crimson": {
    "light indigo": "5"
  },
  "drab fuchsia": {
    "shiny coral": "3"
  },
  "light lime": {
    "bright lavender": "4",
    "light crimson": "2",
    "vibrant blue": "5"
  },
  "dotted yellow": {
    "pale fuchsia": "4"
  },
  "bright lavender": {
    "no other bag": "n"
  },
  "dull aqua": {
    "posh gray": "4",
    "light indigo": "2",
    "light crimson": "5"
  },
  "shiny aqua": {
    "pale orange": "2",
    "drab gray": "3"
  },
  "drab red": {
    "striped tomato": "5"
  },
  "bright salmon": {
    "light indigo": "3"
  },
  "faded turquoise": {
    "clear beige": "5"
  },
  "shiny gold": {
    "mirrored bronze": "1",
    "dull aqua": "4",
    "dotted indigo": "2",
    "light indigo": "1"
  },
  "clear fuchsia": {
    "dotted indigo": "5"
  },
  "dark bronze": {
    "shiny black": "4"
  },
  "dotted olive": {
    "bright cyan": "4"
  },
  "vibrant purple": {
    "striped gray": "3"
  },
  "dull purple": {
    "wavy orange": "5",
    "faded black": "5",
    "plaid violet": "2",
    "vibrant lavender": "2"
  },
  "shiny lime": {
    "light purple": "1"
  },
  "pale cyan": {
    "vibrant red": "3",
    "dark white": "5",
    "mirrored red": "4",
    "vibrant brown": "3"
  },
  "dark cyan": {
    "clear olive": "5",
    "plaid purple": "4",
    "striped teal": "5",
    "bright magenta": "3"
  },
  "dim lime": {
    "muted tomato": "3"
  },
  "drab olive": {
    "dotted blue": "1",
    "dull lavender": "2"
  },
  "faded gray": {
    "mirrored tan": "5",
    "muted orange": "1",
    "posh purple": "3"
  },
  "muted gray": {
    "pale white": "5"
  },
  "mirrored yellow": {
    "bright black": "5",
    "plaid turquoise": "1"
  },
  "wavy lime": {
    "plaid bronze": "5",
    "mirrored green": "4",
    "pale lavender": "5",
    "wavy tan": "3"
  },
  "wavy orange": {
    "dotted lime": "3",
    "dull crimson": "1",
    "mirrored turquoise": "2"
  },
  "dotted cyan": {
    "dotted lime": "4",
    "striped teal": "2"
  },
  "light green": {
    "muted indigo": "3",
    "pale fuchsia": "3"
  },
  "drab cyan": {
    "posh bronze": "3",
    "drab white": "5",
    "drab tomato": "3",
    "light indigo": "1"
  },
  "faded brown": {
    "bright tan": "3",
    "striped gray": "4",
    "drab cyan": "5",
    "mirrored tan": "3"
  },
  "light purple": {
    "pale aqua": "3",
    "dim olive": "1",
    "dim tan": "2"
  },
  "vibrant lavender": {
    "faded lavender": "2"
  },
  "vibrant brown": {
    "striped black": "4",
    "faded yellow": "1"
  },
  "dull crimson": {
    "mirrored white": "2",
    "clear tomato": "2"
  },
  "drab green": {
    "drab beige": "2",
    "vibrant crimson": "1",
    "vibrant purple": "2",
    "faded black": "1"
  },
  "shiny bronze": {
    "dark fuchsia": "3",
    "dark bronze": "3",
    "striped brown": "2",
    "shiny brown": "4"
  },
  "plaid blue": {
    "faded green": "5"
  },
  "light white": {
    "wavy brown": "3",
    "dark violet": "3",
    "muted coral": "2",
    "plaid chartreuse": "5"
  },
  "bright violet": {
    "faded violet": "1",
    "muted maroon": "2",
    "posh gray": "3",
    "dark salmon": "2"
  },
  "striped turquoise": {
    "bright salmon": "5",
    "bright lavender": "1",
    "wavy maroon": "1",
    "light turquoise": "4"
  },
  "clear cyan": {
    "posh magenta": "5",
    "striped plum": "4",
    "light turquoise": "5"
  },
  "bright silver": {
    "dotted indigo": "4",
    "drab tomato": "1",
    "muted salmon": "1"
  },
  "mirrored plum": {
    "bright white": "5",
    "vibrant brown": "1"
  },
  "mirrored aqua": {
    "drab bronze": "5",
    "mirrored salmon": "3",
    "posh lavender": "3",
    "bright crimson": "3"
  },
  "muted lavender": {
    "posh bronze": "4",
    "striped lime": "3",
    "striped chartreuse": "5",
    "plaid plum": "5"
  },
  "dim orange": {
    "muted magenta": "3",
    "pale magenta": "2"
  },
  "faded teal": {
    "wavy coral": "5",
    "posh blue": "3"
  },
  "dotted magenta": {
    "faded purple": "5",
    "posh fuchsia": "5",
    "drab white": "1"
  },
  "drab brown": {
    "light red": "4",
    "muted chartreuse": "4"
  },
  "striped indigo": {
    "light maroon": "3",
    "pale gray": "2",
    "faded magenta": "2",
    "vibrant teal": "1"
  },
  "dull gray": {
    "clear olive": "3"
  },
  "clear blue": {
    "clear tomato": "2",
    "faded purple": "4",
    "wavy lavender": "1"
  },
  "posh green": {
    "clear aqua": "5",
    "bright orange": "4",
    "bright cyan": "2",
    "dim fuchsia": "4"
  },
  "muted fuchsia": {
    "dull lavender": "5",
    "drab violet": "2",
    "dotted magenta": "4",
    "wavy yellow": "2"
  },
  "posh turquoise": {
    "dotted lavender": "2"
  },
  "bright blue": {
    "pale lavender": "1",
    "dark yellow": "5",
    "bright beige": "5"
  },
  "bright bronze": {
    "bright gold": "2",
    "shiny turquoise": "4"
  },
  "muted chartreuse": {
    "vibrant tomato": "1",
    "bright lavender": "1",
    "vibrant blue": "1",
    "dim black": "1"
  },
  "dim bronze": {
    "light lavender": "2",
    "striped plum": "2",
    "dotted gold": "3"
  },
  "pale crimson": {
    "dotted lavender": "5",
    "clear crimson": "2",
    "bright lime": "4"
  },
  "clear bronze": {
    "drab tomato": "2",
    "vibrant red": "3"
  },
  "pale lime": {
    "pale indigo": "4",
    "striped black": "3"
  },
  "light red": {
    "bright salmon": "4",
    "bright gold": "1"
  },
  "pale orange": {
    "drab blue": "5"
  },
  "shiny crimson": {
    "light crimson": "3"
  },
  "dotted beige": {
    "bright turquoise": "5",
    "dotted turquoise": "3",
    "muted green": "4",
    "light black": "4"
  },
  "light gray": {
    "faded green": "4",
    "wavy gold": "5",
    "dim olive": "4"
  },
  "light coral": {
    "muted plum": "2"
  },
  "light magenta": {
    "dim maroon": "1",
    "clear chartreuse": "5",
    "vibrant lavender": "1",
    "plaid beige": "2"
  },
  "striped violet": {
    "vibrant beige": "1"
  },
  "bright aqua": {
    "dark crimson": "1",
    "dark bronze": "4"
  },
  "dotted maroon": {
    "light silver": "5",
    "dark maroon": "5"
  },
  "drab plum": {
    "dotted yellow": "1",
    "bright green": "1",
    "vibrant brown": "4"
  },
  "posh gray": {
    "light crimson": "2"
  },
  "dotted blue": {
    "posh tan": "2"
  },
  "vibrant olive": {
    "faded yellow": "3"
  },
  "posh white": {
    "faded tomato": "1",
    "dim violet": "2"
  },
  "drab lavender": {
    "light brown": "3"
  },
  "dark blue": {
    "vibrant lavender": "5",
    "posh plum": "4",
    "pale violet": "5",
    "pale beige": "1"
  },
  "muted beige": {
    "striped lime": "1",
    "clear purple": "2",
    "vibrant brown": "1",
    "mirrored bronze": "2"
  },
  "dim maroon": {
    "dim beige": "5",
    "dull coral": "1"
  },
  "wavy teal": {
    "drab yellow": "1",
    "muted magenta": "2",
    "wavy gold": "4",
    "vibrant cyan": "2"
  },
  "shiny salmon": {
    "light red": "2",
    "bright fuchsia": "3"
  },
  "light salmon": {
    "vibrant purple": "3",
    "drab blue": "3",
    "faded black": "3",
    "bright white": "2"
  },
  "shiny magenta": {
    "light fuchsia": "5",
    "drab indigo": "3",
    "mirrored yellow": "3",
    "dim purple": "4"
  },
  "plaid black": {
    "light bronze": "3",
    "mirrored tan": "4",
    "muted lime": "4",
    "mirrored white": "5"
  },
  "wavy red": {
    "clear lavender": "4",
    "dull chartreuse": "4"
  },
  "posh beige": {
    "wavy maroon": "4",
    "clear plum": "4"
  },
  "wavy bronze": {
    "wavy purple": "1"
  },
  "dotted gray": {
    "striped black": "3",
    "wavy maroon": "1",
    "pale indigo": "5"
  },
  "bright white": {
    "pale indigo": "3",
    "drab white": "2"
  },
  "mirrored black": {
    "striped plum": "2",
    "wavy brown": "5",
    "wavy crimson": "1"
  },
  "light gold": {
    "posh plum": "3",
    "vibrant crimson": "1"
  },
  "bright fuchsia": {
    "light cyan": "3",
    "drab turquoise": "1",
    "dim orange": "3",
    "dull chartreuse": "1"
  },
  "striped gold": {
    "muted violet": "3",
    "clear teal": "2",
    "posh brown": "2",
    "dim tan": "3"
  },
  "striped orange": {
    "pale fuchsia": "1"
  },
  "drab gold": {
    "shiny teal": "4",
    "muted aqua": "5",
    "wavy lavender": "3"
  },
  "light chartreuse": {
    "bright gold": "2",
    "striped turquoise": "5",
    "light gray": "5",
    "wavy aqua": "3"
  },
  "vibrant chartreuse": {
    "dotted yellow": "2",
    "bright fuchsia": "5",
    "striped chartreuse": "1",
    "dim salmon": "1"
  },
  "pale indigo": {
    "no other bag": "n"
  },
  "drab lime": {
    "mirrored turquoise": "2"
  },
  "vibrant plum": {
    "dotted turquoise": "3"
  },
  "pale teal": {
    "striped lime": "5",
    "faded salmon": "3",
    "bright indigo": "4"
  },
  "dark tan": {
    "drab lavender": "2"
  },
  "faded lavender": {
    "vibrant blue": "1"
  },
  "drab orange": {
    "muted turquoise": "1",
    "pale indigo": "3"
  },
  "dim fuchsia": {
    "drab silver": "1"
  },
  "vibrant lime": {
    "posh purple": "1",
    "light coral": "3",
    "light lime": "3",
    "light indigo": "4"
  },
  "clear salmon": {
    "light indigo": "2",
    "striped plum": "2"
  },
  "dark black": {
    "striped fuchsia": "2",
    "wavy white": "4",
    "wavy maroon": "2"
  },
  "muted white": {
    "pale indigo": "2",
    "light plum": "5"
  },
  "pale gray": {
    "light yellow": "4",
    "striped olive": "2",
    "clear black": "4"
  },
  "dull cyan": {
    "vibrant red": "2",
    "drab tan": "3"
  },
  "striped silver": {
    "mirrored green": "3",
    "wavy purple": "2",
    "posh aqua": "3"
  },
  "wavy magenta": {
    "dim purple": "4",
    "dark aqua": "2"
  },
  "drab black": {
    "light plum": "2"
  },
  "drab maroon": {
    "vibrant lime": "2",
    "dull purple": "4",
    "mirrored salmon": "2",
    "vibrant aqua": "3"
  },
  "shiny orange": {
    "wavy coral": "5",
    "pale violet": "1"
  },
  "plaid coral": {
    "mirrored cyan": "2"
  },
  "plaid cyan": {
    "pale indigo": "4"
  },
  "dotted crimson": {
    "dim teal": "2"
  },
  "mirrored tan": {
    "pale red": "1",
    "light cyan": "1",
    "clear gray": "1",
    "striped gray": "3"
  },
  "light maroon": {
    "vibrant bronze": "2"
  },
  "bright brown": {
    "wavy yellow": "2"
  },
  "muted tomato": {
    "clear gold": "5",
    "plaid coral": "5"
  },
  "dotted white": {
    "dotted purple": "4",
    "posh chartreuse": "1",
    "dark gold": "5",
    "vibrant gold": "1"
  },
  "muted red": {
    "clear crimson": "4",
    "posh magenta": "4",
    "plaid cyan": "3",
    "pale crimson": "5"
  },
  "wavy yellow": {
    "muted magenta": "3"
  },
  "muted purple": {
    "dull chartreuse": "1"
  },
  "striped olive": {
    "faded tomato": "5"
  },
  "light aqua": {
    "vibrant tomato": "1",
    "posh lavender": "4"
  },
  "vibrant blue": {
    "muted lime": "2"
  },
  "pale lavender": {
    "shiny coral": "4",
    "muted crimson": "5"
  },
  "mirrored turquoise": {
    "posh blue": "5"
  },
  "pale gold": {
    "plaid chartreuse": "3",
    "pale red": "2",
    "clear aqua": "5"
  },
  "wavy salmon": {
    "dotted yellow": "4"
  },
  "shiny beige": {
    "bright magenta": "1",
    "muted fuchsia": "1"
  },
  "striped bronze": {
    "bright turquoise": "5",
    "dull black": "5"
  },
  "dark magenta": {
    "drab lime": "5"
  },
  "dark coral": {
    "plaid bronze": "3",
    "posh green": "3",
    "muted violet": "4",
    "plaid purple": "3"
  },
  "mirrored green": {
    "posh purple": "4",
    "dotted blue": "2",
    "dull turquoise": "1",
    "plaid purple": "2"
  },
  "striped tomato": {
    "drab white": "5"
  },
  "muted teal": {
    "shiny lime": "5"
  },
  "vibrant bronze": {
    "shiny gold": "3",
    "striped fuchsia": "5",
    "mirrored orange": "5",
    "bright green": "2"
  },
  "clear olive": {
    "posh violet": "3",
    "bright beige": "1"
  },
  "clear maroon": {
    "vibrant lime": "1",
    "muted coral": "2"
  },
  "faded coral": {
    "dim beige": "4",
    "bright magenta": "4",
    "vibrant magenta": "3",
    "bright silver": "1"
  },
  "pale bronze": {
    "dark teal": "1",
    "dotted aqua": "4"
  },
  "striped aqua": {
    "faded aqua": "3"
  },
  "vibrant cyan": {
    "mirrored blue": "2",
    "striped black": "4",
    "clear black": "4"
  },
  "wavy coral": {
    "drab salmon": "4",
    "light orange": "3",
    "posh aqua": "3"
  },
  "mirrored salmon": {
    "pale lime": "4"
  },
  "plaid magenta": {
    "dim yellow": "1",
    "light indigo": "1"
  },
  "dim brown": {
    "vibrant purple": "3",
    "striped gray": "2",
    "mirrored salmon": "4",
    "muted maroon": "2"
  },
  "dull magenta": {
    "mirrored green": "1",
    "dull coral": "4"
  },
  "dark silver": {
    "dotted gray": "5"
  },
  "pale tomato": {
    "vibrant blue": "1",
    "shiny green": "4"
  },
  "plaid tomato": {
    "mirrored chartreuse": "4",
    "plaid white": "1",
    "wavy magenta": "4"
  },
  "faded magenta": {
    "dull yellow": "4",
    "wavy silver": "3"
  },
  "mirrored crimson": {
    "muted tan": "3",
    "posh beige": "5"
  },
  "muted green": {
    "dim black": "4"
  },
  "wavy chartreuse": {
    "plaid tan": "1",
    "bright tan": "5",
    "posh beige": "2"
  },
  "wavy plum": {
    "clear purple": "2",
    "dotted violet": "5"
  },
  "plaid indigo": {
    "dull brown": "1",
    "clear chartreuse": "3",
    "posh gold": "5",
    "pale teal": "1"
  },
  "posh teal": {
    "light magenta": "3",
    "muted white": "3",
    "dim blue": "3"
  },
  "striped salmon": {
    "shiny coral": "4"
  },
  "pale green": {
    "dark gold": "4",
    "striped teal": "4"
  },
  "vibrant yellow": {
    "faded salmon": "4",
    "drab beige": "1",
    "muted black": "1",
    "clear lavender": "5"
  },
  "dim cyan": {
    "mirrored turquoise": "2"
  },
  "wavy turquoise": {
    "dark turquoise": "4",
    "bright tan": "3",
    "muted tomato": "4"
  },
  "bright cyan": {
    "wavy indigo": "5"
  },
  "plaid red": {
    "mirrored coral": "1",
    "dull plum": "2",
    "vibrant coral": "4",
    "vibrant lavender": "4"
  },
  "dark chartreuse": {
    "mirrored salmon": "5",
    "posh salmon": "5",
    "faded turquoise": "2"
  },
  "plaid gray": {
    "dim gold": "1",
    "faded olive": "4"
  },
  "vibrant tomato": {
    "wavy maroon": "5",
    "pale red": "1"
  },
  "faded purple": {
    "faded tomato": "1",
    "striped black": "1",
    "vibrant purple": "5"
  },
  "dotted salmon": {
    "bright gold": "3",
    "dull gray": "5",
    "dim blue": "3"
  },
  "drab salmon": {
    "mirrored green": "3",
    "mirrored tan": "1"
  },
  "pale blue": {
    "dotted fuchsia": "4"
  },
  "faded cyan": {
    "striped orange": "2",
    "vibrant gold": "1",
    "bright orange": "2",
    "muted gray": "1"
  },
  "dull red": {
    "drab teal": "2",
    "light bronze": "2"
  },
  "wavy beige": {
    "plaid tan": "1",
    "dotted indigo": "5",
    "dotted gold": "2"
  },
  "dim red": {
    "pale magenta": "5"
  },
  "dark green": {
    "muted cyan": "5",
    "faded brown": "3"
  },
  "muted cyan": {
    "drab tomato": "3",
    "drab white": "4"
  },
  "mirrored maroon": {
    "wavy tomato": "5",
    "vibrant white": "2"
  },
  "faded indigo": {
    "dim olive": "5",
    "drab tan": "5",
    "light orange": "3"
  },
  "light lavender": {
    "faded salmon": "1",
    "pale lime": "5",
    "dark maroon": "4"
  },
  "dim aqua": {
    "faded gold": "4",
    "striped fuchsia": "1"
  },
  "shiny violet": {
    "pale yellow": "1",
    "mirrored aqua": "4"
  },
  "wavy blue": {
    "dim fuchsia": "1",
    "clear gold": "3",
    "faded aqua": "1",
    "light red": "1"
  },
  "striped teal": {
    "mirrored silver": "3"
  },
  "striped green": {
    "muted teal": "1"
  },
  "vibrant teal": {
    "muted indigo": "3"
  },
  "shiny turquoise": {
    "dull chartreuse": "3"
  },
  "bright lime": {
    "bright magenta": "5",
    "dull orange": "1"
  },
  "shiny red": {
    "drab tan": "4",
    "posh turquoise": "4"
  },
  "dull violet": {
    "shiny silver": "4",
    "striped crimson": "3",
    "mirrored plum": "1"
  },
  "dim black": {
    "posh magenta": "1",
    "mirrored turquoise": "3",
    "faded tomato": "2",
    "dim turquoise": "4"
  },
  "muted maroon": {
    "mirrored tan": "2",
    "clear coral": "3"
  },
  "posh yellow": {
    "bright tan": "1",
    "mirrored bronze": "5"
  },
  "clear purple": {
    "shiny black": "5"
  },
  "dim silver": {
    "clear brown": "4"
  },
  "bright black": {
    "posh fuchsia": "4"
  },
  "shiny plum": {
    "mirrored cyan": "1"
  },
  "striped lavender": {
    "pale lavender": "3",
    "muted cyan": "4"
  },
  "drab tan": {
    "no other bag": "n"
  },
  "bright olive": {
    "muted coral": "3"
  },
  "dim plum": {
    "drab tan": "3",
    "pale indigo": "5"
  },
  "light teal": {
    "dotted blue": "2",
    "muted salmon": "5",
    "bright purple": "2"
  },
  "clear lavender": {
    "muted lime": "2",
    "plaid magenta": "5",
    "pale lime": "3",
    "drab aqua": "1"
  },
  "muted black": {
    "light crimson": "3",
    "mirrored blue": "4"
  },
  "clear aqua": {
    "plaid gold": "5"
  },
  "dark teal": {
    "bright purple": "1",
    "dotted coral": "1",
    "plaid aqua": "5",
    "posh maroon": "5"
  },
  "mirrored gray": {
    "dim turquoise": "3",
    "bright black": "4",
    "drab lavender": "1"
  },
  "vibrant fuchsia": {
    "vibrant magenta": "1"
  },
  "bright yellow": {
    "mirrored cyan": "1",
    "clear olive": "1"
  },
  "vibrant red": {
    "dotted indigo": "1",
    "faded beige": "2",
    "drab tomato": "1"
  },
  "striped maroon": {
    "plaid aqua": "3",
    "dim maroon": "2",
    "plaid chartreuse": "4"
  },
  "pale tan": {
    "posh gray": "5",
    "wavy violet": "3"
  }
}
