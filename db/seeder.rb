#title randomizer
a0 = %w(Join\ us Stop\ by\ for Come\ stay\ hi\ at)
a1 = %w(a the our another)
a2 = %w(Motorcycle Bicycle Scooter)
a3 = %w(Ride Race Event Function Shindig)
a4 = %w(hosted put\ on put\ together organized arranged)
a5 = %w(with by)
a6 = %w(The\ SF\ Riders Bay\ Area\ Moto\ Club Relaxed\ Riders The\ Bicycle\ Mafia Oakland\ Bicyclies) 


def body1
<<~HEREDOC
It‘s not just any motocross race, but the oldest and one of the most prestigious in the United States. Hangtown is the opening round of the 12-race Lucas Oil Pro Motocross Championship sanctioned by the AMA.
Every year, there is a new battle to witness, and new champions to crown. Perhaps it's the mystique of 50 years of racing, dating back before the series was even established, that makes Hangtown racing legendary. Many people say that attending Hangtown is a way to be a part of motorcross history.
HEREDOC
end 

def body2
  <<~HERDOC
  Racing gets underway on Thursday, May 17 at 9am, with some of the best amateurs in the country doing battle. In the afternoon, the top pros will be riding on the track for their series media day. Later on Thursday night, join us at the Palladio Mall in Folsom from 5 - 7pm for a Hangtown pre-party. Amateur racing continues on Friday, May 18 at 9am, when the top experts and Pro Am's compete for pro points, which leads to a professional license in the premier professional series. 
  HERDOC
end 

def body3 
  <<~HERDOC
  To get tickets and full race information about the Hangtown Motocross Classic, go to www.hangtownmx.com and click on "tickets." In addition to General Admission tickets, the Hangtown Motocross Classic has some of the finest high-end hospitality areas in the entire series.
  HERDOC
end 

def body4
  <<~HEREDOC
  Prepare to be pampered in the Superticket area with food and drinks, start-line seating, all-day pit passes, and great swag. The Superticket area, along with other hospitality areas, are limited in number, and sell out every year so don't wait!  Many of the hospitality areas include an all-day pit pass, which makes these hospitality areas an experience like no other. With many different ticket choices to choose from, and some with limited seating, make your selection online and beat the rush.
  HEREDOC
end 

def body5
  <<~HEREDOC
  Over the last few years Family Off-Road Adventures has raised and donated THOUSANDS of dollars to the Blue Ribbon Coalition, a non-profit organization that works to keep the trails open.
  During the Saturday evening Family BBQ we will award prizes and raffle THOUSHANDS in donations from motorcycle dealerships and product retailers.
  HEREDOC
end 

def body6
  <<~HEREDOC
  We will have booths with Tshirts, a pinstriper, a tattoo artist, bring your motorcycle clothes that don't fit let's have a yard sale, or fashion show auction lol Don't forget it is also “Cinco de Mayo” so if you bring a pinata please make sure you fill it with goodies. This year is going to be a little different we are going to have some old time fun. We are finally going to really get to know each other. Much more coming will let you know soon. Will be posting rides this week also. 
  HEREDOC
end 


def randomizer(*args)
  result = []
  args.each do |arr|
    result << arr.sample 
  end 
  result.join(" ")
end 

def randomizerbody(*args)
  args.sample
end 

p randomizer(a0, a1, a2, a3, a4, a5, a6)
p randomizerbody(body1, body2, body3, body4, body5, body6)