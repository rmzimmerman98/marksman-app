module.exports = [
    {
        name: 'Akshan',
        title: 'the Rouge Sentinel',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3b/AkshanSquare.png/revision/latest?cb=20210725215647',
        passive: 
        {
            name: 'Dirty Fighting',
            description: 'INNATE: Whenever Akshan uses a basic attack, he fires an additional shot after a delay. If this shot is cancelled, he gains bonus movement speed decaying over 1 second. The additional shot applies on-hit and on-attack effects at 100% effectiveness and can critically strike. INNATE: Akshan\'s basic attacks on-hit and ability hits apply a stack of Dirty Fighting to enemies for 5 seconds, refreshing on subsequent applications and stacking up to 3 times. The third stack against a target consumes them all to deal bonus magic damage; if the target is a champion, Akshan will also gain a shield for 2 seconds. The shield may be gained only once every few seconds.'
        },
        abilityQ: 
        {
            name: 'Avengerang',
            description: 'ACTIVE: Akshan throws a boomerang in the target direction that briefly grants sight around its trajectory and deals physical damage to enemies hit, revealing them for 1 second and extending its range each time it hits a target. If this hits an enemy champion, Akshan gains bonus movement speed that decays over 1 second. Once the boomerang has passed its original range and has not hit a target in the last 500 units of travelling, it homes back to Akshan and applies the same effects to enemies hit.'
        },
        abilityW:
        {
            name: 'Going Rogue',
            description: 'PASSIVE: Akshan marks enemy champions that kill allied champions as Scoundrels for 60 seconds. If Akshan scores a takedown against a Scoundrel while alive and within 3 seconds of damaging them, he receives an additional 100 Gold and revives all dead allied champions that they have slain after 1 second. When Akshan claims a Scoundrel\'s bounty, he removes the marks of all other enemies. Scoundrels refresh their mark duration on subsequent kills, and will have their mark removed when they die by any means. Akshan cannot mark enemies as Scoundrels while they are dead. Allies are revived at their summoning platform. ACTIVE: Akshan enters camouflage, which lasts indefinitely while he is near terrain or inside brush, and for 2 seconds otherwise. During this time. he can see trails leading toward Scoundrels, and while facing them if they are within 5000 units, he gains bonus mana regeneration equal to 12% of his missing mana as well as bonus movement speed. Going Rogue can be recast after 1 second, and does so automatically after its duration. Attacking or casting abilities ends Going Rogue immediately. RECAST: Akshan ends Going Rogue.'
        },
        abilityE:
        {
            name: 'Heroic Swing',
            description: 'ACTIVE: Akshan can activate Heroic Swing three times before the ability goes on cooldown, and can use the third cast only after 0.5 seconds of the second cast. Akshan may input a attack or movement command to use the second and third casts. FIRST CAST: Akshan fires a hook in the target direction that embeds in the first terrain hit, and enters preparation for up to 2 seconds. Heroic Swing\'s second cast can be used while the hook is attached. If the hook fails to attach or Akshan is moved or becomes immobilized, grounded, or polymorphed within the duration, the preparation will end prematurely, cancelling Heroic Swing in the process. SECOND CAST: Akshan swings around the terrain in the target direction, stopping upon colliding with an enemy champion or terrain. While swinging, he rapidly fires at the nearest visible enemy to deal them physical damage and apply on-hit effects at 25% effectiveness per shot. Akshan will be knocked down by any immobilizing or polymorphing crowd control during the dash. THIRD CAST: Akshan ends the swing by jumping to the target location, though not through terrain, and fires one last shot at a nearby visible enemy. Scoring an enemy champion takedown reduces Heroic Swing\'s current cooldown to 0.5 seconds. The shots can critically strike and apply life steal at 100% effectiveness.'
        },
        ultimate:
        {
            name: 'Comeuppance',
            description: 'ACTIVE: Akshan locks onto the target enemy champion and begins Channeling icon.png channeling for 2.5 seconds, revealing them as well as revealing himself. He gradually stores bullets into his weapon over the duration. Comeuppance will recast after the duration, or can recast early after 0.5 seconds. Comeuppance is placed on a 5-second cooldown if the channel is cancelled. RECAST: Akshan fires all stored bullets at the target, each briefly granting sight around their trajectory and dealing physical damage to the first enemy hit, increaseing based on the target\'s missing health. The shots can hit structures. Each bullet\'s damage applies life steal at 100% effectiveness, and executes minions.'
        },
        stats:
        {
            health1: 630,
            heatlhGrowth: 104,
            health18: 2398,
            attack1: 52,
            attackGrowth: 3.5,
            attack18: 111.5,
            range: 500,
            speed: 330
        }
    },
    {
		name: 'Ashe',
        title: 'the Frost Archer',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/4a/AsheSquare.png/revision/latest?cb=20170728180206',
        passive: 
        {
            name: 'Frost Shot',
            description: 'INNATE: Ashe\'s basic attacks and ability hits apply Frost to enemies for 2 seconds, which slows them for the duration. Basic attacks against enemies with Frost are modified to deal increased damage based on critical strike chance. INNATE: Ashe\'s critical strikes do not deal any additional damage, instead they double Frost\'s slow strength, decaying over 1 second to its normal strength.'
        },
        abilityQ: 
        {
            name: 'Ranger\'s Focus',
            description: 'PASSIVE: While Ranger\'s Focus is inactive, Ashe\'s basic attacks on-attack generate a stack of Focus for 4 seconds, which refreshes on subsequent attacks and stacks up to 4 times. Stacks expire by one every 1 second. ACTIVE: For 6 seconds, Ashe gains bonus attack speed and empowers her basic attacks to fire a flurry of five arrows. Each arrow deals modified physical damage that benefits from Frost Shot and life steal. Flurries apply on-hit effects only once.'
        },
        abilityW:
        {
            name: 'Volley',
            description: 'ACTIVE: Ashe shoots a volley of arrows in a cone in the target direction, each dealing physical damage to the first enemy hit, and applying Frost Shot to enemy champions hit. Enemies can intercept multiple arrows but do not take damage from any beyond the first.'
        },
        abilityE:
        {
            name: 'Hawkshot',
            description: 'ACTIVE: Ashe sends a hawk spirit toward the target location, granting sight of the area along its path and at its destination for 5 seconds. Ashe periodically stocks a Hawkshot charge, up to a maximum of 2.'
        },
        ultimate:
        {
            name: 'Enchanted Crystal Arrow',
            description: 'ACTIVE: Ashe fires a massive arrow of ice in the target direction, granting sight of the area it flies through each for 1 second. The arrow shatters upon hitting an enemy champion, dealing them magic damage, stunning them for 1 to 3.5 seconds, based on distance traveled, and granting sight of the area around them for 1 second. Enemies surrounding the primary target are dealt 50% damage and afflicted with Frost Shot Frost Shot.'
        },
        stats:
        {
            health1: 640,
            heatlhGrowth: 101,
            health18: 2357,
            attack1: 59,
            attackGrowth: 2.95,
            attack18: 109.15,
            range: 600,
            speed: 325
        }
    },
    {
		name: 'Caitlyn',
        title: 'the Sheriff of Piltover',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e6/CaitlynSquare.png/revision/latest?cb=20170801175326',
        passive: 
        {
            name: 'Headshot',
            description: 'INNATE: Caitlyn\'s basic attacks generate a stack of Count on-attack, doubled if she is within a brush. At 6 stacks, or 5 while in brush, her next basic attack consumes all stacks to become a Headshot. HEADSHOT: Caitlyn\'s basic attack is empowered to have an uncancellable windup and deal bonus physical damage, increased against non-champions. Caitlyn may fire more than one Headshot until it hits a target, which consumes all stacks. Enemies that step over a Yordle Snap Trap or are hit by 90 Caliber Net can grant an additional Headshot against them at 1300 range within 1.8 seconds, without consuming stacks. Each method grants only one Headshot at a time.'
        },
        abilityQ: 
        {
            name: 'Piltover Peacemaker',
            description: 'ACTIVE: Caitlyn fires a piercing shot in the target direction that deals physical damage to the first enemy it passes through, after which it expands in width but deals only 50% damage to enemies it hits thereafter. Enemies revealed by Yordle Snap Trap always take full damage from Piltover Peacemaker.'
        },
        abilityW:
        {
            name: 'Yordle Snap Trap',
            description: 'ACTIVE: Caitlyn sets a visible trap at the target location that is untargetable and arms after 1 second, lasting for a duration. The trap grants Sight icon.png sight of the area for 1 second after being placed. Caitlyn periodically stocks a Yordle Snap Trap charge, up to a maximum amount. Deploying traps beyond the maximum destroys the oldest one. The next enemy champion that springs the trap is Root icon.png rooted for 1.5 seconds and True Sight icon.png revealed for 3 seconds, as well as takes additional damage from Headshot Headshot. Trapped targets become immune to further Yordle Snap Traps for 3 seconds.'
        },
        abilityE:
        {
            name: '90 Caliber Net',
            description: 'ACTIVE: Caitlyn fires a net in the target direction and recoils 390 units in the opposite direction. The net deals magic damage to the first enemy hit and slows them by 50% for 1 second.'
        },
        ultimate:
        {
            name: 'Ace in the Hole',
            description: 'ACTIVE: Caitlyn locks onto the target enemy champion and channels for 1 second, revealing them as well as revealing herself. Ace in the Hole is placed on a 5-second cooldown if canceled. Once Caitlyn completes the channel, she fires a homing bullet toward the target that deals physical damage to the first enemy champion it hits, increased by critical strike chance.'
        },
        stats:
        {
            health1: 580,
            heatlhGrowth: 107,
            health18: 2399,
            attack1: 60,
            attackGrowth: 3.8,
            attack18: 124.6,
            range: 650,
            speed: 325
        }
    },
    {
		name: 'Draven',
        title: 'the Glorious Executioner',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d7/DravenSquare.png/revision/latest?cb=20170801201235',
        passive: 
        {
            name: 'League of Draven',
            description: 'INNATE: When Draven catches a Spinning Axe, kills a non-champion, or destroys a turret, he gains a stack of Adoration. Additionally, whenever Draven kills a minion or destroys a ward or trap, he generates a Strike stack for 10 seconds, refreshing on subsequent kills and stacking up to 6 times. All Strike stacks are lost if he drops an axe axe or a nearby minion dies without him killing it. The sixth stack consumes all stacks to grant him 2 Adoration stacks. When Draven kills an enemy champion, he consumes all of his Adoration stacks and gains bonus gold based on his stacks. Draven loses 75% of his Adoration stacks upon death.'
        },
        abilityQ: 
        {
            name: 'Spinning Axe',
            description: 'ACTIVE: Draven starts spinning his axe, empowering his next basic attack within 6 seconds to deal bonus physical damage. Upon hitting the target, the axe then ricochets off of them to land after 2 seconds, with the location being determined by Draven\'s current movement. If Draven catches the axe, he gains Spinning Axe\'s empowered attack again. Draven can hold up to two Spinning Axes at once.'
        },
        abilityW:
        {
            name: 'Blood Rush',
            description: 'ACTIVE: Draven enters an adrenaline rush, gaining bonus attack speed for 3 seconds as well as decaying bonus movement speed and ghosting for 1.5 seconds. Catching a Spinning Axe resets Blood Rush\'s cooldown.'
        },
        abilityE:
        {
            name: 'Stand Aside',
            description: 'ACTIVE: Draven throws a fan of axes in a line in the target direction, dealing physical damage to enemies hit, knocking them aside, though not through terrain, and slowing them for 2 seconds.'
        },
        ultimate:
        {
            name: 'Whirling Death',
            description: 'ACTIVE: Draven hurls two massive axes in the target direction that briefly grant sight of their surroundings and deal physical damage to enemies hit. Enemy champions that would have health left within the current number of League of Draven stacks are executed. Whirling Death can be recast after 1 second while the axes are traveling, and does so automatically after the axes hit an enemy champion or the edge of the map. RECAST: Draven forces the axes to reverse direction, slowly coming to a stop before homing back to him, dealing the same damage to enemies hit. Enemies can be hit only once per pass.'
        },
        stats:
        {
            health1: 675,
            heatlhGrowth: 104,
            health18: 2443,
            attack1: 62,
            attackGrowth: 3.6,
            attack18: 123.2,
            range: 550,
            speed: 330
        }
    },
    {
		name: 'Ezreal',
        title: 'the Prodigal Explorer',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c3/EzrealSquare.png/revision/latest?cb=20170801212628',
        passive: 
        {
            name: 'Rising Spell Force',
            description: 'INNATE: Ezreal generates a stack of Rising Spell Force for each enemy hit by his abilities, lasting for 6 seconds, refreshing on subsequent hits, and stacking up to 5 times. RISING SPELL FORCE: For each stack, Ezreal gains bonus attack speed, up to a maximum of 50%.'
        },
        abilityQ: 
        {
            name: 'Mystic Shot',
            description: 'ACTIVE: Ezreal fires a bolt of energy in the target direction that deals physical damage to the first enemy hit and applies on-hit and on-attack effects at 100% effectiveness. If Mystic Shot successfully hits an enemy, current cooldowns of Ezreal\'s abilities, including Mystic Shot\'s, are reduced by 1.5 seconds.'
        },
        abilityW:
        {
            name: 'Essence Flux',
            description: 'ACTIVE: Ezreal fires an orb in the target direction that marks the first enemy champion, epic monster, or structure hit for 4 seconds. His next basic attack or ability against the target detonates the mark to deal them bonus magic damage. If the mark was detonated with an ability, Ezreal restores 60 mana plus the mana cost of that ability.'
        },
        abilityE:
        {
            name: 'Arcane Shift',
            description: 'ACTIVE: Ezreal blinks from his current location to up to 475 units towards the target location, then fires a homing bolt towards the nearest enemy that deals magic damage and reveals them for 1 second. Arcane Shift prioritizes firing at the nearest enemy marked by Essence Flux.'
        },
        ultimate:
        {
            name: 'Trueshot Barrage',
            description: 'ACTIVE: Ezreal fires an arc of energy in the target direction that briefly grants sight of its surroundings and deals magic damage to enemies hit.'
        },
        stats:
        {
            health1: 600,
            heatlhGrowth: 102,
            health18: 2334,
            attack1: 60,
            attackGrowth: 2.5,
            attack18: 102.5,
            range: 550,
            speed: 325
        }
    },
    {
		name: 'Jhin',
        title: 'the Virtuoso',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8b/JhinSquare.png/revision/latest?cb=20200327221914',
        passive: 
        {
            name: 'Whisper',
            description: 'INNATE - DEATH IN 4 ACTS: Jhin\'s basic attacks consume ammunition within 4 rounds. He will reload over 2.5 seconds immediately after expending all rounds or withholding leftover rounds after 10 seconds of being out of combat and not being affected by crowd control. The latter reload can be interrupted by declaring an attack or casting an ability. Jhin\'s final round attack has an uncancellable windup versus champions, always critically strikes, including against structures, and deals bonus physical damage based on the target\'s missing health. INNATE - EVERY MOMENT MATTERS: Jhin gains bonus attack damage based on his critical strike chance and bonus attack speed.Additionally, critical strikes grant Jhin bonus movement speed for 2 seconds.'
        },
        abilityQ: 
        {
            name: 'Dancing Grenade',
            description: 'ACTIVE: Jhin throws a grenade at the target enemy that deals physical damage and can bounce to up to three additional nearby enemies. The damage is increased by 35% of the base damage if the enemy the grenade last bounced off of dies.'
        },
        abilityW:
        {
            name: 'Deadly Flourish',
            description: 'PASSIVE: Enemy champions that trigger a Lotus Trap to bloom or are damaged by Jhin or allied champions are marked for 4 seconds. ACTIVE: Jhin fires a shot in the target direction that deals physical damage to all enemies in a line until colliding with an enemy champion. Hitting a marked champion roots them for a duration and grants Jhin Every Moment Matters.' 
        },
        abilityE:
        {
            name: 'Captive Audience',
            description: 'PASSIVE - BEAUTY IN DEATH: Whenever Jhin kills an enemy champion, he summons a Blooming Lotus Trap on their corpse. ACTIVE: Jhin places a Lotus Trap at the target location which, upon landing, becomes stealthed after arming over 1 second, lasting for up to 180 seconds and granting sight within its radius. The Lotus Trap blooms upon enemy contact, with enemies in the area at the time of its trigger becoming revealed for 4 seconds. Jhin periodically stocks a Lotus Trap charge, up to a maximum of 2. Blooming Lotus Traps slow enemies within the area for 2 seconds before exploding, dealing magic damage to enemies. Lotus Traps deal 65% damage against minions as well as champions who have been struck by another Lotus Trap in the last 1 second.'
        },
        ultimate:
        {
            name: 'Curtain Call',
            description: 'ACTIVE: Jhin channels for up to 10 seconds, transforming his weapon into a cannon and gaining the ability to recast Curtain Call 4 times within the duration. RECAST: After 0.25 seconds, Jhin fires a round in the target direction that grants sight around its trajectory for 0.5 seconds and deals physical damage to enemies hit, increased based on the target\' missing health. The bullet stops upon hitting an enemy champion, slowing them for 0.5 seconds and revealing them for 2 seconds. Each cast has a static cooldown of 1 second. The fourth shot critically strikes for additional bonus physical damage.'
        },
        stats:
        {
            health1: 655,
            heatlhGrowth: 107,
            health18: 2474,
            attack1: 59,
            attackGrowth: 4.7,
            attack18: 138.9,
            range: 550,
            speed: 330
        }
    },
    {
		name: 'Jinx',
        title: 'the Loose Cannon',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e2/JinxSquare.png/revision/latest?cb=20170802020615',
        passive: 
        {
            name: 'Get Excited!',
            description: 'INNATE: Whenever Jinx scores a takedown against an enemy champion, epic monster, turret, or inhibitor within 3 seconds of damaging them, she gains a large amount of bonus movement speed decaying over 6 seconds. Additionally, she gains 25% total attack speed and is allowed to exceed the attack speed cap for the same duration.'
        },
        abilityQ: 
        {
            name: 'Switcheroo!',
            description: 'TOGGLE: Jinx switches between Pow-Pow, her minigun, and Fishbones, her rocket launcher. POW-POW: Basic attacks with Pow-Pow generate a stack of Jinx\'s Rev\'d up for 2.5 seconds, refreshing on subsequent attacks with Pow-Pow and stacking up to 3 times. Each stack of Rev\'d up grants bonus attack speed, with all stacks beyond the first one being 50% effective. Stacks expire by one when the duration ends. FISHBONES: Basic attacks with Fishbones cost mana on-attack to deal 110% AD modified physical damage to the target and nearby enemies. The damage is affected by critical strike modifiers. While Fishbones is equipped, Jinx gains bonus range but loses 10% of her bonus attack speed.'
        },
        abilityW:
        {
            name: 'Zap!',
            description: 'ACTIVE: Jinx fires a shock blast in the target direction that deals physical damage to the first enemy it hits and reveals and slows them for 2 seconds.'
        },
        abilityE:
        {
            name: 'Flame Chompers!',
            description: 'ACTIVE: Jinx tosses out 3 Chompers centered at the target location, landing after 0.4 seconds, arming after 0.5 seconds, and exploding after 5 seconds to deal magic damage to nearby enemies. Each Chomper explodes on contact with an enemy champion, rooting them for 1.5 seconds. Enemy champions can be affected by only one Chomper.'
        },
        ultimate:
        {
            name: 'Super Mega Death Rocket!',
            description: 'ACTIVE: Jinx fires a massive rocket in the target direction, briefly granting sight of its surroundings and exploding upon colliding with an enemy champion. The explosion deals physical damage to nearby enemies and grants sight of the area for 2 seconds. Super Mega Death Rocket! deals damage based on the distance traveled, as well as the target\'s missing health.'
        },
        stats:
        {
            health1: 630,
            heatlhGrowth: 100,
            health18: 2330,
            attack1: 59,
            attackGrowth: 3.4,
            attack18: 116.8,
            range: 525,
            speed: 325
        }
    },
    {
		name: 'Kai\'sa',
        title: 'Daughter of the Void',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/49/Kai%27SaSquare.png/revision/latest?cb=20180222044444',
        passive: 
        {
            name: 'Second Skin',
            description: 'INNATE - LIVING WEAPON: Kai\'Sa can evolve each of her basic abilities by gaining a set amount of permanent stats from items and stat growth, granting them additional effects. Evolving an ability causes her to enter a 2-second cast time. The upgrade is lost if the stat requirement is no longer met. INNATE - PLASMA: Kai\'Sa\'s basic attacks on-hit and Void Seeker apply stacks of Plasma to enemies for 4 seconds, refreshing on subsequent applications and stacking up to 5 times. Basic attacks each apply 1 stack and Void Seeker applies 2 stacks, increased to 3 if it is evolved. Her and nearby allies\' immobilizing effects and polymorphs against enemy champions will also apply a stack of Plasma. INNATE - CAUSTIC WOUNDS: Plasma stacks applied by Kai\'Sa\'s basic attacks or Void Seeker deal bonus magic damage. The fifth stack against a target consumes them all to deal additional bonus magic damage based on the target\'s missing health.'
        },
        abilityQ: 
        {
            name: 'Icathian Rain',
            description: 'ACTIVE: Kai\'Sa releases a swarm of 6 missiles that evenly distributes among nearby visible enemies, each one hitting their target after 0.4 seconds to deal physical damage. Minions below 35% health take double damage. Evolution: Requires 100 Attack damage to upgrade Icathian Rain to instead fire 12 missiles.'
        },
        abilityW:
        {
            name: 'Void Seeker',
            description: 'ACTIVE: Kai\'Sa fires a void bolt in the target direction that briefly grants sight around its trajectory as it travels, deals magic damage to the first enemy hit, applies 2 Plasma, and reveals them for 4 seconds. Evolution: Requires 100 ability power from items to upgrade Void Seeker to applies 3 Plasma instead and refunds 77% of its cooldown it hits an enemy champion.'
        },
        abilityE:
        {
            name: 'Supercharge',
            description: 'ACTIVE: Kai\'Sa charges up over the cast time, during which she is still allowed to move, becomes ghosted, and gains bonus movement speed, with the effectiveness increased based on bonus attack speed. After completing the charge, she gains bonus attack speed and reduces her basic attack windup for 4 seconds. Supercharge\'s current cooldown is reduced by 0.5 seconds on-attack. Evolution: Requires 100% attack speed from items to upgrade Supercharge to grants invisibility at the start of the cast time for 0.5 seconds.'
        },
        ultimate:
        {
            name: 'Killer Instinct',
            description: 'ACTIVE: Kai\'Sa grants herself a shield for 2 seconds and dashes to a target location near a visible enemy champion that was affected by Plasma within the last 4 seconds. The shield\'s duration is refreshed when the dash ends.'
        },
        stats:
        {
            health1: 670,
            heatlhGrowth: 102,
            health18: 2404,
            attack1: 59,
            attackGrowth: 2,
            attack18: 93,
            range: 525,
            speed: 335
        }
    },
    {
		name: 'Kalista',
        title: 'the Spear of Vengeance',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/a/aa/KalistaSquare.png/revision/latest?cb=20170802024107',
        passive: 
        {
            name: 'Martial Poise',
            description: 'INNATE: Whenever Kalista inputs a movement command during her basic attack windup or the cast time of Pierce, she will dash in the target direction. Kalista\'s dash from Martial Poise will be knocked down by any immobilizing or polymorphing crowd control. The range and speed of Martial Poise are modified by the tier of Kalista\'s Boots. Additionally, Kalista begins the game with the unique Black Spear, by which she can bind with one ally, making them her Oathsworn.'
        },
        abilityQ: 
        {
            name: 'Pierce',
            description: 'ACTIVE: Kalista launches a spear in the target direction that deals physical damage to the first enemy hit. If Pierce kills the target, the spear continues onward to transfer all of the target\'s Rend stacks to the next enemy it hits. This can repeat indefinitely until the spear reaches its maximum range.'
        },
        abilityW:
        {
            name: 'Sentinel',
            description: 'PASSIVE - SOUL-MARKED: While Kalista and her Oathsworn are tethered, their basic attacks and Pierce apply a Soul-Mark to their targets. If both Soul-Marks are applied to the same target within 4 seconds, they take bonus magic damage and cannot be Soul-Marked again for a few seconds. Kalista applies the damage on-attack while the Oathsworn does so on-hit. ACTIVE: Kalista summons a Sentinel that patrols back and forth on a path along the target location, granting sight of its surroundings as it travels. Kalista periodically stocks a Sentinel charge, up to a maximum of 2.'
        },
        abilityE:
        {
            name: 'Rend',
            description: 'PASSIVE: Kalista\'s basic attacks on-hit and Pierce apply a stack of Rend to enemies for 4 seconds, refreshing on subsequent hits and stacking up to 254 times. ACTIVE: Kalista rips all lodged spears from nearby enemies, consuming all of their stacks to deal them physical damage and slow them for 2 seconds. Each additional spear on the target deals reduced damage. Rend deals 50% reduced damage against epic monsters. If Rend kills at least one target, the cooldown is reset and Kalista restores mana. A nearby enemy with a Rend stack is required to cast this ability. Rend can be used during the dash of Martial Poise Martial Poise and the cast time of Pierce. In-flight spears and Pierce if in cast will be empowered to apply Rend\'s effects to their targets. These empowered spears can also trigger Rend\'s refund.'
        },
        ultimate:
        {
            name: 'Fate\'s Call',
            description: 'ACTIVE: Kalista invokes her tether to retrieve her Oathsworn and hold them for 4 seconds, pulling them to her over 1 second and cleansing them from all crowd control, as well as rendering them invulnerable and untargetable for the duration. While held, the Oathsworn is vanished and may dash with displacement immunity to end Fate\'s Call\'s effects and reappear at the target location; after the duration, they will automatically do so at maximum range from Kalista\'s facing direction. The Oathsworn stops upon colliding with an enemy champion, knocking up all nearby enemies for a duration and landing to their basic attack range from the target collided with. The Oathsworn must be nearby to cast this ability, and is also silenced and unable to perform movement or attack commands while Fate\'s Call is in effect.'
        },
        stats:
        {
            health1: 574,
            heatlhGrowth: 114,
            health18: 2512,
            attack1: 66,
            attackGrowth: 3.5,
            attack18: 125.3,
            range: 525,
            speed: 330
        }
    },
    {
		name: 'Kindred',
        title: 'the Eternal Hunters',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/6/6e/KindredSquare.png/revision/latest?cb=20170802031055',
        passive: 
        {
            name: 'Mark of the Kindred',
            description: 'INNATE: Both Lamb and Wolf mark targets to hunt. Scoring a takedown against a hunted target collects a stack of Mark of the Kindred. MARK OF THE KINDRED: Lamb gains bonus range on her basic attacks and Mounting Dread. INNATE - LAMB: Lamb is offered a selection of enemy champions to hunt if she has not been in combat with them in the last 6 seconds. Once selected, the mark is applied after an 8-second delay and thereafter it can be collected by Kindred. Lamb gains the ability to select a new target every 75 seconds. Targets successfully hunted cannot be marked again for 4 minutes. INNATE - WOLF: Starting at 3:15, Wolf periodically marks a random large monster within the enemy team\'s jungle for 180 seconds. The hunted camp is highlighted on the mini map to both teams. Once the hunted target is slain or the mark expires, Wolf will wait 45 seconds before selecting a new target.The type of monster that Wolf can mark changes based on Kindred\'s current Mark of the Kindred stacks.'
        },
        abilityQ: 
        {
            name: 'Dance of Arrows',
            description: 'ACTIVE: Lamb Dash.png dashes toward the target location, gaining Attack speed icon.png 35% (+ 5% per mark mark) bonus attack speed for 4 seconds and firing an arrow at up to 3 nearby Sight icon.png visible enemies that deals physical damage. Her current attack target within any proximity will be prioritized by one of the arrows.Dance of Arrows\' Cooldown icon.png total cooldown is reduced to an amount while Lamb is within the area of Wolf\'s Frenzy Wolf\'s Frenzy. Casting Wolf\'s Frenzy reduces Dance of Arrows\' current cooldown to the same amount.'
        },
        abilityW:
        {
            name: 'Wolf\'s Frenzy',
            description: 'PASSIVE: As Kindred move and attack, they build up to 100 stacks of Hunter\'s Vigor. At maximum stacks, Lamb\'s next basic attack heals her based on her missing health. The heal is not triggered if Kindred is at full health. ACTIVE: Wolf dashes to the target location, then claims the surrounding area as his territory for the next 8.5 seconds, separating from Lamb. He automatically attacks the closest nearby visible enemy within the area, prioritizing the last enemy Lamb has attacked, then enemy champions, then non-champions. Wolf\'s attacks deal magic damage and scale with 25% of Kindred\'s bonus attack speed. Against monsters, his attacks deal 150% damage and slow the target by 50% for 2 seconds.'
        },
        abilityE:
        {
            name: 'Mounting Dread',
            description: 'ACTIVE: Lamb fires a shot at the target enemy that slows them by 50% for 1 second and applies a stack of Mounting Dread for 4 seconds. Her basic attacks each apply an additional stack, refreshing the duration and stacking up to 4 times. Her next basic attack against a target with 3 stacks directs Wolf to pounce on the target, consuming all stacks to deal additional physical damage, capped against monsters. The additional damage will critically strike against targets below 15% of their maximum health, increasing the missing health portion, and cannot critically strike otherwise. The base damage of the pounce can independently critically strike.'
        },
        ultimate:
        {
            name: 'Lamb\'s Respite',
            description: 'ACTIVE: Lamb blesses the ground under herself for 4 seconds. All units inside the zone gain a minimum health threshold of 10% of their maximum health, and will become invulnerable for the remaining duration when they reach or are at the threshold, during which they also cannot be healed, but can still regenerate health. All targetable units within the zone are healed when the blessing ends.'
        },
        stats:
        {
            health1: 610,
            heatlhGrowth: 99,
            health18: 2293,
            attack1: 65,
            attackGrowth: 2.5,
            attack18: 107.5,
            range: 500,
            speed: 325
        }
    },
    {
		name: 'Kog\'Maw',
        title: 'the Mouth of the Abyss',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/4/45/Kog%27MawSquare.png/revision/latest?cb=20170802031916',
        passive: 
        {
            name: 'Icathian Surprise',
            description: 'INNATE: Upon taking fatal damage, Kog\'Maw enters a zombie state for 4 seconds, gaining up to 40% bonus movement speed over the duration. At the end of the duration, he explodes to deal true damage to nearby enemies based on his level. While under this state, Kog\'Maw becomes invulnerable, untargetable, and immune to crowd control, but is also rendered unable to declare basic attacks, cast abilities, use summoner spells, and activate items.'
        },
        abilityQ: 
        {
            name: 'Caustic Spittle',
            description: 'PASSIVE: Kog\'Maw gains bonus attack speed. ACTIVE: Kog\'Maw ejects a wad of spittle in the target direction that deals magic damage to the first enemy hit and reduces their armor and magic resistance for 4 seconds.'
        },
        abilityW:
        {
            name: 'Bio-Arcane Barrage',
            description: 'ACTIVE: Kog\'Maw empowers his basic attacks for the next 8 seconds to bonus attack range and deal bonus magic damage on-hit, capped against minions and monsters.'
        },
        abilityE:
        {
            name: 'Void Ooze',
            description: 'ACTIVE: Kog\'Maw spews a gob of ooze in the target direction that deals magic damage to enemies hit. A field of ooze is created in its wake for 4 seconds, slowing enemies.'
        },
        ultimate:
        {
            name: 'Living Artillery',
            description: 'ACTIVE: Kog\'Maw spits a globule of acid into the air that drops to the target location after 0.6 seconds, granting sight of the area before dealing magic damage to enemies hit and revealing them for 2 seconds. Living Artillery\'s damage is increased based on their missing health, or instead by 100% if the target is below 40% maximum health. Kog\'Maw then gains a stack of Living Artillery for 8 seconds, refreshing on subsequent casts and stacking up to 9 times. LIVING ARTILLERY: For each stack, Living Artillery\'s mana cost is increased by 40.'
        },
        stats:
        {
            health1: 635,
            heatlhGrowth: 99,
            health18: 2318,
            attack1: 61,
            attackGrowth: 3.1,
            attack18: 113.7,
            range: 500,
            speed: 300
        }
    },
    {
		name: 'Lucian',
        title: 'the Purifier',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/1/1e/LucianSquare.png/revision/latest?cb=20170802043353',
        passive: 
        {
            name: 'Lightslinger',
            description: 'INNATE: After casting an ability, Lucian\'s next basic attack within 3.5 seconds fires an additional shot on-attack after 0.25 seconds, which deals 50% physical damage, increased to 100% AD against minions. The second shot applies on-hit and on-attack effects at 100% effectiveness and is affected by critical strike modifiers. If Lucian\'s primary target is killed before the second shot can go off, he automatically shoots another enemy in range. INNATE - VIGILANCE: Whenever Lucian is healed, shielded or granted a buff by an ally, his next two shots within 6 seconds are empowered to deal bonus magic damage on-hit. The empowered shots can stack up to 4 times.'
        },
        abilityQ: 
        {
            name: 'Piercing Light',
            description: 'ACTIVE: Lucian fires a laser in a line in the direction of the target enemy that deals physical damage to enemies hit.'
        },
        abilityW:
        {
            name: 'Ardent Blaze',
            description: 'ACTIVE: Lucian fires a missile in the target direction that explodes in a cross pattern upon hitting an enemy or reaching maximum range, dealing magic damage to enemies hit and granting sight of the area for 1 second. Enemies hit are marked for 6 seconds. Lucian gains bonus movement speed for 1 second when he or allied champions damage a marked target. Allied champions triggering this effect grant Lucian Vigilance.'
        },
        abilityE:
        {
            name: 'Relentless Pursuit',
            description: 'PASSIVE: Relentless Pursuit\'s current cooldown is reduced by 1 second for each Lightslinger shot hit, doubled to 2 seconds against enemy champions. ACTIVE: Lucian dashes in the target direction.'
        },
        ultimate:
        {
            name: 'The Culling',
            description: 'ACTIVE: Lucian Channeling icon.png channels for up to 3 seconds, rapidly firing up to 22 shots (based on critical strike chance) in the target direction. Each shot deals physical damage to the first enemy hit, doubled against minions. The Culling can be recast after 0.75 seconds during the channel, and does so automatically when the channel ends. While channeling, Lucian is ghosted and may still move and cast Relentless Pursuit. RECAST: Lucian ends The Culling.'
        },
        stats:
        {
            health1: 641,
            heatlhGrowth: 100,
            health18: 2341,
            attack1: 60,
            attackGrowth: 2.9,
            attack18: 109.3,
            range: 500,
            speed: 335
        }
    },
    {
		name: 'Miss Forture',
        title: 'the Bounty Hunter',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9d/MissFortuneSquare.png/revision/latest?cb=20170802061243',
        passive: 
        {
            name: 'Love Tap',
            description: 'INNATE: Miss Fortune\'s basic attacks are empowered to apply a mark that expires upon attacking a new enemy. If the enemy was unmarked, this also deals  bonus physical damage, halved against minions.'
        },
        abilityQ: 
        {
            name: 'Double Up',
            description: 'ACTIVE: Miss Fortune fires a shot at the target enemy that deals physical damage, which then bounces to hit another enemy behind them. This applies on-attack effects to the first enemy hit, and on-hit effects to both enemies hit. Double Up\'s bounce is affected by critical strike modifiers. If Double Up kills the primary target, the bounce will critically strike. The bounce prioritizes units directly behind the primary target. A target does not have to be visible be hit by the bounce.'
        },
        abilityW:
        {
            name: 'Strut',
            description: 'PASSIVE: Miss Fortune gains 25 bonus movement speed after 5 seconds without taking persistent damage. This bonus is increased after another 5 seconds, and is granted instantly whenever Strut is cast or upon respawning. ACTIVE: Miss Fortune gains bonus attack speed for 4 seconds. Marking a new target with Love Tap reduces Strut\'s current cooldown by 2 seconds.'
        },
        abilityE:
        {
            name: 'Make It Rain',
            description: 'ACTIVE: Miss Fortune casts a storm of bullets at the target location for 2 seconds, granting sight of the area, dealing magic damage every 0.25 seconds to enemies within, and slowing them.'
        },
        ultimate:
        {
            name: 'Bullet Time',
            description: 'ACTIVE: Miss Fortune channels for up to 3 seconds, firing a number of waves of bullets in the target direction. Each wave is in a spread of 6 projectiles that deals physical damage to enemies hit. Each of the waves can critically strike.'
        },
        stats:
        {
            health1: 640,
            heatlhGrowth: 103,
            health18: 2391,
            attack1: 52,
            attackGrowth: 2.4,
            attack18: 92.8,
            range: 550,
            speed: 325
        }
    },
    {
		name: 'Samira',
        title: 'the Desert Rose',
        picture: 'https://static.wikia.nocookie.net/leagueoflegends/images/3/31/Samira_OriginalSquare.png/revision/latest/scale-to-width-down/75?cb=20200829040527',
        passive: 
        {
            name: 'Daredevil Impulse',
            description: 'INNATE: Samira\'s damaging basic attacks and abilities against at least one enemy champion different from the previous damaging hit made against champions generate a stack of Style for 6 seconds, refreshing on subsequent hits and stacking up to 6 times. STYLE: For each stack, Samira gains bonus movement speed. At maximum stacks, Samira can cast Inferno Trigger. INNATE: Samira\'s basic attacks against targets in 200 range use her blade, becoming non-projectile. Samira\'s basic attack against an immobilized target is empowered to have an uncancellable windup and deal the attack\'s damage over 6 strikes in 0.5 seconds. If the target is a monster or is airborne, the attack also knocks them up for 0.5 seconds. Samira will dash into her attack range of the target if they are nearby, though not through terrain.'
        },
        abilityQ: 
        {
            name: 'Flair',
            description: 'ACTIVE: Samira fires a shot in the target direction that deals physical damage to the first enemy hit. If a targetable enemy is in front of Samira at the time of cast, she will instead slash with her blade in a cone, dealing the same damage to enemies hit. If Flair is cast during Wild Rush, Samira deploys explosives in her wake that detonate upon the end of the dash, dealing the same damage to enemies hit. Flair can critically strike for and will apply life steal at 66.6% effectiveness.'
        },
        abilityW:
        {
            name: 'Blade Whirl',
            description: 'ACTIVE: Samira spins her blade over 0.75 seconds, destroying all hostile non-turret projectiles within the area for the duration. Samira slashes twice during Blade Whirl, each one dealing physical damage to all nearby enemies. The first slash occurs immediately and the second one occurs after the duration.'
        },
        abilityE:
        {
            name: 'Wild Rush',
            description: 'ACTIVE: Samira dashes a fixed distance in the direction of the target enemy or enemy structure, dealing magic damage to enemies she passes through. She also gains bonus attack speed for 3 seconds. Scoring a takedown against an enemy champion within 3 seconds of damaging them resets Wild Rush\'scooldown.'
        },
        ultimate:
        {
            name: 'Inferno Trigger',
            description: 'ACTIVE: Samira unleashes a torrent of shots for 2.3 seconds, reducing her movement speed by 30% and rapidly shooting at nearby enemies over 2 seconds at sporadic times in 0.2-second intervals each, dealing physical damage with each shot, reduced by 75% against minions. Each shot can critically strike and applies life steal at 50% effectiveness.'
        },
        stats:
        {
            health1: 600,
            heatlhGrowth: 108,
            health18: 2436,
            attack1: 57,
            attackGrowth: 3.3,
            attack18: 113.1,
            range: 500,
            speed: 335
        }
    },
    {
		name: 'Senna',
        title: 'the Redeemer',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/21/SennaSquare.png/revision/latest?cb=20191102003549',
        passive: 
        {
            name: 'Absolution',
            description: 'INNATE - WEAKENED SOUL: Senna\'s basic attacks on-hit and damaging abilities on enemy champions apply a stack of Mist for 4 seconds. Subsequent hits will collect Mist and deal bonus physical damage equal based on the target\'s current health, rendering the target immune to further Mist applications for a few seconds. This damage applies life steal at 100% effectiveness. Enemies that die near Senna may spawn a Mist Wraith from their corpse. A Mist Wraith lasts 8 seconds and Senna can basic attack or hit it with Piercing Darkness or Dawning Shadow to kill them instantly, granting her 8 Gold and collecting their Mist. Enemy champions and large monsters will spawn a Mist Wraith. Epic monsters will spawn 2 Mist Wraiths. Minions and lesser monsters that Senna kills have a 8.3% chance to spawn a Mist Wraith. Large minions that Senna does not kill will spawn a Mist Wraith, while lesser minions and lesser monsters that Senna does not kill have a 28% chance to spawn. MIST: For each stack of Mist, Senna gains 0.75 bonus attack damage. For every 20 stacks, she also gains 20 bonus attack range and 10% critical strike chance, capped at 100% critical strike chance. Additionally, 35% of the generated excess critical strike chance is converted into life steal. INNATE - RELIC CANNON: Senna\'s basic attacks on-hit deal 20% AD bonus physical damage and grant her 10% of the target\'s movement speed as bonus movement speed for 0.5 seconds. This damage applies life steal at 100% effectiveness.'
        },
        abilityQ: 
        {
            name: 'Piercing Darkness',
            description: 'ACTIVE: Senna fires a spectral laser in the direction of the target unit, healing herself and allied champions hit, and dealing physical damage to enemies hit in a thinner line. Enemies hit are slowed by 15% for a duration. The damage against champions applies life steal at 100% effectiveness. Upon being hit, enemy turrets, wards, jungle plants, Mist Wraiths and any other attack-interactive units are considered basic attacked once, while champions and turrets* are applied on-hit effects at 100% effectiveness. Piercing Darkness\' current cooldown is reduced by 1 second on-hit.'
        },
        abilityW:
        {
            name: 'Last Embrace',
            description: 'ACTIVE: Senna throws a globule of Black Mist in the target direction that deals physical damage to the first enemy hit and attaches to them for 1 second. After the duration or when the target dies, the Black Mist spreads out of the target, rooting them and surrounding enemies for a few seconds.'
        },
        abilityE:
        {
            name: 'Curse of the Black Mist',
            description: 'ACTIVE: Senna surrounds herself with an aura of mist and gains camouflage for a duration. If Senna breaks the camouflage, she regains it after 1.75 seconds without performing actions that break stealth. Allied champions who enter the mist gain Wraith Form for a duration equal to the remaining duration. WRAITH FORM: Gain camouflage. Enemies will have obscured vision of camouflaged Wraiths moving outside of the mist. Wraith Form can be regained if lost by breaking the camouflage after 1.75 seconds without performing actions that break stealth. Wraith Form ends immediately upon Senna\'s death. Senna and allies camouflaged by Curse of the Black Mist also gain 20% bonus movement speed.'
        },
        ultimate:
        {
            name: 'Dawning Shadow',
            description: 'ACTIVE: Senna fires two waves of spectral light in the target direction, granting sight of the area briefly along the path. The center wave deals physical damage to enemy champions hit and reveals them for 3 seconds. It also collects Mist Wraiths it hits. The broad wave grants a shield to Senna and allied champions hit for 3 seconds.'
        },
        stats:
        {
            health1: 530,
            heatlhGrowth: 89,
            health18: 2043,
            attack1: 50,
            attackGrowth: 0,
            attack18: 50,
            range: 600,
            speed: 330
        }
    },
    {
		name: 'Sivir',
        title: 'the Battle Mistress',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e1/SivirSquare.png/revision/latest?cb=20170802131925',
        passive: 
        {
            name: 'Fleet of Foot',
            description: 'INNATE: Sivir\'s basic attacks and ability hits against enemy champions grant her bonus movement speed decaying over 1.5 seconds, refreshing on subsequent hits.'
        },
        abilityQ: 
        {
            name: 'Boomerang Blade',
            description: 'ACTIVE: Sivir hurls her crossblade in the target direction, dealing physical damage to enemies within its path. Boomerang Blade\'s damage is reduced based on non-champions hit. Upon reaching maximum range, the crossblade returns to her, resetting the damage modifier and dealing the same damage to enemies on its way back.'
        },
        abilityW:
        {
            name: 'Ricochet',
            description: 'ACTIVE: Sivir empowers her crossblade for the next 4 seconds, gaining bonus attack speed and causing her basic attacks to bounce to additional surrounding enemies, dealing them physical damage. If the triggering attack critically strikes, the bounces will do so as well. Ricochet deals 65% damage against minions and executes them if they would be left below 15 health. Bounces occur only up to 8 times and can target each enemy up to one additional time per empowered attack. They prioritize the nearest new target, then the nearest target if no new targets are available.'
        },
        abilityE:
        {
            name: 'Spell Shield',
            description: 'ACTIVE: Sivir gains a spell shield for 1.5 seconds. Upon successfully blocking a hostile effect, she heals herself and activates Fleet of Foot after 0.25 seconds.'
        },
        ultimate:
        {
            name: 'On The Hunt',
            description: 'ACTIVE: Sivir gains On the Hunt for a duration and grants it to nearby allied champions for the remaining duration. ON THE HUNT: Gain  bonus movement speed. While active, Sivir\'s basic attacks on-attack reduce her basic abilities\' current cooldowns by 0.5 seconds each. On the Hunt\'s duration is refreshed whenever Sivir scores a takedown against an enemy champion within 3 seconds of damaging them.'
        },
        stats:
        {
            health1: 600,
            heatlhGrowth: 104,
            health18: 2368,
            attack1: 58,
            attackGrowth: 2.8,
            attack18: 105.6,
            range: 500,
            speed: 335
        }
    },
    {
		name: 'Tristana',
        title: 'the Yordle Gunner',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/06/TristanaSquare.png/revision/latest?cb=20200327221741',
        passive: 
        {
            name: 'Draw a Bead',
            description: 'INNATE: Tristana\'s basic attacks, Explosive Charge and Buster Shot gain bonus range based on level.'
        },
        abilityQ: 
        {
            name: 'Rapid Fire',
            description: 'ACTIVE: Tristana empowers her cannon, gaining bonus attack speed for 7 seconds.'
        },
        abilityW:
        {
            name: 'Rocket Jump',
            description: 'ACTIVE: Tristana jumps to the target location. Upon landing, she deals magic damage to nearby enemies and slows them by 60% for a duration. Scoring an enemy takedown or detonating Explosive Charge at maximum stacks on a champion will reset Rocket Jump\'s cooldown.'
        },
        abilityE:
        {
            name: 'Explosive Charge',
            description: 'PASSIVE: Tristana\'s basic attacks are empowered to trigger an explosion when they kill the target, dealing magic damage to nearby enemies. ACTIVE: Tristana tosses an explosive charge at the target enemy that attaches to them for 4 seconds. The charge then detonates, dealing physical damage to nearby enemies. Explosive Charge can target and damage turrets, and explodes in a larger radius on a turret. Tristana\'s basic attacks on-hit and abilities against the target increase Explosive Charge\'s damage by 30%, stacking up to 4 times for a maximum 120% increase, upon which the charge also detonates instantly.'
        },
        ultimate:
        {
            name: 'Buster Shot',
            description: 'ACTIVE: Tristana fires a massive cannonball at the target enemy that deals magic damage. They and surrounding enemies are also knocked back and stunned for up to 0.75 seconds, during which they are revealed.'
        },
        stats:
        {
            health1: 670,
            heatlhGrowth: 102,
            health18: 2404,
            attack1: 59,
            attackGrowth: 3.7,
            attack18: 121.9,
            range: 525,
            speed: 325
        }
    },
    {
		name: 'Twitch',
        title: 'the Plague Rat',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/79/TwitchSquare.png/revision/latest?cb=20170802161732',
        passive: 
        {
            name: 'Deadly Venom',
            description: 'INNATE: Twitch\'s basic attacks on-hit apply a stack of Deadly Venom for 6 seconds, refreshing on subsequent applications and stacking up to 6 times. DEADLY VENOM: For each stack, the target is dealt increasing true damage per second over the duration. This effect is considered a Poison icon.png poison.'
        },
        abilityQ: 
        {
            name: 'Ambush',
            description: 'ACTIVE: After a 1-second delay, Twitch becomes camouflaged for a duration. Attacking or casting Venom Cask or Contaminate ends Ambush immediately. During this time, Twitch gains 10% bonus movement speed, increased to 30% while facing enemy champions within a 1000-unit radius who cannot see him. Upon breaking stealth, Twitch gains bonus attack speed for 5 seconds. When an enemy champion dies while afflicted with Deadly Venom, Ambush\'s cooldown is reset.'
        },
        abilityW:
        {
            name: 'Venom Cask',
            description: 'ACTIVE: Twitch hurls a cask of venom that explodes at the target location, applying Deadly Venom to enemies hit and granting sight of the area. The area then becomes contaminated for 3 seconds, applying a Deadly Venom stack each second to enemies within and slowing them.'
        },
        abilityE:
        {
            name: 'Contaminate',
            description: 'ACTIVE: Twitch sends out a lethal toxin to each nearby enemy afflicted by Deadly Venom, dealing them physical damage. Contaminate deals additional physical damage and 30% AP magic damage for each stack of Deadly Venom on the target.'
        },
        ultimate:
        {
            name: 'Spray and Pray',
            description: 'ACTIVE: Twitch gains bonus attack damage and 300 bonus attack range for 6 seconds, during which his basic attacks are replaced by bolts that travel slightly further than his attack range in a straight line, dealing damage to every enemy unit hit. The bolts apply on-hit effects at 100% effectiveness, and can critically strike.'
        },
        stats:
        {
            health1: 682,
            heatlhGrowth: 100,
            health18: 2382,
            attack1: 59,
            attackGrowth: 3.1,
            attack18: 111.7,
            range: 550,
            speed: 330
        }
    },
    {
		name: 'Varus',
        title: 'the Arrow of Retribution',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/c/c2/VarusSquare.png/revision/latest?cb=20171215034329',
        passive: 
        {
            name: 'Living Vengeance',
            description: 'INNATE: When Varus kills an enemy, he gains bonus attack speed for 5 to 11 seconds based on level, increased upon scoring an enemy champion takedown.'
        },
        abilityQ: 
        {
            name: 'Piercing Arrow',
            description: 'ACTIVE: Varus charges while being slowed by 20% for up to 4 seconds to increase Piercing Arrow\'s range and damage over the first 1.25 seconds of the channel. Piercing Arrow can be recast within the duration. If the charge completes without reactivation, Piercing Arrow is cancelled and refunds 50% of the mana cost. RECAST: Varus fires a piercing arrow in the target direction that deals physical damage to enemies hit. The damage of the arrow as well as any detonated Blight stacks are increased based on channel time, and the arrow\'s damage is reduced by based on enemies hit.'
        },
        abilityW:
        {
            name: 'Blighted Quiver',
            description: 'PASSIVE: Varus\' basic attacks are empowered to deal bonus magic damage and apply a stack of Blight on-hit for 6 seconds, refreshing on subsequent applications and stacking up to 3 times. Varus\' abilities consume all Blight stacks on enemies hit to apply the effect. BLIGHT: For each stack consumed, the target is dealt bonus magic damage. Against a champion or epic monster, this also reduces his basic abilities\' current cooldowns by 12% of the total cooldown for each stack, up to 36% per target. This damage is capped against monsters. ACTIVE: Varus\' next Piercing Arrow within 5.5 seconds is empowered to deal bonus magic damage based on the target\'s missing health. This damage is capped against monsters. If Varus does not cast Piercing Arrow, Blighted Quiver can be recast after 1 second within the duration, and does so automatically afterwards or when he dies. Blighted Quiver can be cast during the first 0.25 seconds of Piercing Arrow\'s Piercing Arrow\'s charge, and will be placed on full cooldown even if Piercing Arrow Piercing Arrow is not recast. RECAST: Varus ends Blighted Quiver and places it on a 1-second cooldown.'
        },
        abilityE:
        {
            name: 'Hail of Arrows',
            description: 'ACTIVE: Varus fires a hail of arrows at the target location that land after 0.5 seconds, dealing physical damage to enemies hit. The area then becomes desecrated for 4 seconds, slowing enemies within and inflicting them with Grievous Wounds.'
        },
        ultimate:
        {
            name: 'Chain of Corruption',
            description: 'ACTIVE: Varus unleashes a tendril of corruption in the target direction that infects the first enemy champion hit, dealing magic damage and rooting them for 2 seconds, during which they are revealed. Over the first 1.5 seconds, they are also inflicted with maximum stacks of Blight. Upon impact, the tendril roots into the ground from which it seeks out nearby enemy champions. If a target does not leave the area within 2 seconds, they subsequently become infected as well, taking the same damage and effects. A new tendril is then spread out from the infected target that is closest to a nearby uninfected enemy champion. The infection can spread repeatedly until there are no new targets.'
        },
        stats:
        {
            health1: 600,
            heatlhGrowth: 105,
            health18: 2385,
            attack1: 62,
            attackGrowth: 3.4,
            attack18: 119.8,
            range: 575,
            speed: 330
        }
    },
    {
		name: 'Vayne',
        title: 'the Night Hunter',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/95/VayneSquare.png/revision/latest?cb=20170802170334',
        passive: 
        {
            name: 'Night Hunter',
            description: 'INNATE: Vayne gains 30 bonus movement speed while facing a nearby visible enemy champion. FINAL HOUR BONUS: The bonus movement speed is tripled to 90.'
        },
        abilityQ: 
        {
            name: 'Tumble',
            description: 'ACTIVE: Vayne dashes a fixed distance in the target direction, though not through terrain, and empowers her next basic attack within 7 seconds to deal bonus physical damage.'
        },
        abilityW:
        {
            name: 'Silver Bolts',
            description: 'PASSIVE: Vayne\'s basic attacks on-hit and Condemn apply a stack of Silver Bolts for 3.5 seconds, refreshing on subsequent applications, expiring upon attacking a new enemy, and stacking up to 3 times. The third stack consumes them all to deal bonus true damage, with a minimum threshold. This damage is capped against monsters.'
        },
        abilityE:
        {
            name: 'Condemn',
            description: 'ACTIVE: Vayne fires a heavy bolt at the target enemy that deals physical damage and knocks them back 475 units, though not through terrain. If the target collides with terrain, they take bonus physical damage and become stunned for 1.5 seconds.'
        },
        ultimate:
        {
            name: 'Final Hour',
            description: 'ACTIVE: Vayne equips her crossbow, gaining bonus attack damage and tripling Night Hunter\'s bonus for a duration. Additionally, Tumble becomes empowered with a reduced cooldown, and grants Vayne invisibility for 1 second. Attacking or casting Condemn breaks the stealth immediately. Scoring an enemy champion takedown within 3 seconds of damaging them will extend Final Hour\'s duration by 4 seconds, up to its original duration.'
        },
        stats:
        {
            health1: 550,
            heatlhGrowth: 103,
            health18: 2301,
            attack1: 60,
            attackGrowth: 2.35,
            attack18: 99.95,
            range: 550,
            speed: 330
        }
    },
    {
		name: 'Xayah',
        title: 'the Rebel',
        picture: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/b/b5/XayahSquare.png/revision/latest?cb=20170802181210',
        passive: 
        {
            name: 'Clean Cuts',
            description: 'INNATE: Xayah\'s ability casts generate 3 stacks of Clean Cuts, lasting for 8 seconds, refreshing on subsequent casts, and stacking up to 5 times. Xayah\'s basic attacks are empowered to each consume a stack on-attack to instead shoot a Feather that deals the attack\'s damage to the primary target and reduced damage to other enemies hit, with the secondary damage also critically striking if the main attack does. INNATE - LOVER\'S LEAP: If either Xayah or Rakan Rakan is channeling Recall, the other may move nearby and channel their own to join alongside them. Both reach base at the time of which the initiator\'s Recall completes.'
        },
        abilityQ: 
        {
            name: 'Double Daggers',
            description: 'ACTIVE: Xayah barrages two Feathers in the target direction that each deal physical damage to enemies hit. Targets hit after the first take 50% reduced damage.'
        },
        abilityW:
        {
            name: 'Deadly Plumage',
            description: 'ACTIVE: Xayah enters a frenzy for 4 seconds, gaining bonus attack speed and empowering her basic attacks to strike a second time, dealing 20% damage. Whenever Xayah hits an enemy champion with the strike, she gains 30% bonus movement speed for 1.5 seconds.'
        },
        abilityE:
        {
            name: 'Bladecaller',
            description: 'ACTIVE: Xayah recalls all planted Feathers to shoot back to her, each dealing physical damage to enemies hit, increased based on critical strike chance. Bladecaller deals 50% damage to minions. A target hit by at least three Feathers is rooted for 1.25 seconds.'
        },
        ultimate:
        {
            name: 'Featherstorm',
            description: 'ACTIVE: Xayah leaps into the air, becoming untargetable and ghosted for 1.5 seconds. After 1 second, she shoots 5 Feathers in a cone in the target direction that deal physical damage to enemies hit.'
        },
        stats:
        {
            health1: 660,
            heatlhGrowth: 102,
            health18: 2394,
            attack1: 60,
            attackGrowth: 3.5,
            attack18: 127.5,
            range: 525,
            speed: 330
        }
    },
    {
		name: 'Zeri',
        title: 'the Spark of Zaun',
        picture: 'https://static.wikia.nocookie.net/leagueoflegends/images/7/7d/Zeri_OriginalSquare.png/revision/latest/smart/width/250/height/250?cb=20220330171840',
        passive: 
        {
            name: 'Living Battery',
            description: 'INNATE: Zeri absorbs the energy of shields she damages, granting herself a shield equal to 60% of the post-mitigation damage dealt to the shield. Each instance of shield gained by Living Battery lasts for 3 seconds. INNATE - GOTTA ZIP!: Whenever Zeri gains a shield, she gains 10% bonus movement speed for 2 seconds.'
        },
        abilityQ: 
        {
            name: 'Burst Fire',
            description: 'ACTIVE: Zeri fires a burst of 7 rounds in the target direction that each deal physical damage to the first enemy hit. Burst Fire\'s projectile is treated as a basic attack: it hits any enemy unit a typical basic attack can; deals basic damage; can critically strike, and applies on-hit and on-attack effects at 100% effectiveness to the first enemy hit. Burst Fire\'s cooldown and cast time are reduced with attack speed, with the maximum of 1.5 attacks per second. 70% of attack speed in excess of the cap is converted into bonus attack damage.'
        },
        abilityW:
        {
            name: 'Ultrashock Laser',
            description: 'ACTIVE: Zeri fires an electric pulse in the target direction that deals physical damage to the first enemy hit and slows them for 2 seconds. If the pulse hits terrain, it transforms into a laser in a line that grants sight of the area for 1.75 seconds and fires after 0.85 seconds, applying the same effects to enemies hit and critically striking against champions and monsters.'
        },
        abilityE:
        {
            name: 'Spark Surge',
            description: 'ACTIVE: Zeri dashes in the target direction. She will dash farther across terrain if Spark Surge was cast within 50 units of any, gaining unobstructed vision of the surrounding 800 units and revealing herself while there are enemy champions within 1500 units of her. Afterwards, she gains Lightning Rounds for 5 seconds, empowering Burst Fire to deal bonus magic damage to the first enemy hit, increased based on critical strike chance, and pierce through enemies, though dealing modified damage after the first and not applying attack effects nor life steal to secondary targets. This damage is affected by critical strike modifiers. Spark Surge\'s current cooldown is reduced by 0.5 seconds for every champion Zeri hits with charged basic attacks or abilities, increased to 1.5 seconds if she does so with a cast of Burst Fire or Ultrashock Laser that critically strikes.'
        },
        ultimate:
        {
            name: 'Lightning Crash',
            description: 'ACTIVE: Zeri discharges an electric nova that deals magic damage to nearby enemies. If this hits at least one enemy champion, she enters Overcharged for 5 seconds. Hitting an enemy champion with an ability or charged charged basic attack will extend the duration by 1.5 seconds, up to its original duration. OVERCHARGED: Zeri gains 30% bonus attack speed and 10% bonus movement speed. Burst Fire is empowered to have a 20% shorter cast time and instead fire 3 rounds that travel with increased speed and chain to the nearest visible enemy within 650 units of the target, up to 4 subsequent targets, to deal 25% AD physical damage. This damage can critically strike. During Overcharged, Zeri can generate stacks of Hypercharged from enemy champions that last 1.5 seconds. She generates 1 stack for each one she hits with an ability or charged basic attack, increased to 3 on abilities that critically strike. Subsequent hits refresh the duration of Hypercharged. Burst Fire grants stacks only against the first target hit. HYPERCHARGED: For each stack, Zeri gains 0.5% bonus movement speed.'
        },
        stats:
        {
            health1: 630,
            heatlhGrowth: 115,
            health18: 2585,
            attack1: 53,
            attackGrowth: 1.3,
            attack18: 75.1,
            range: 500,
            speed: 330
        }
    },
]