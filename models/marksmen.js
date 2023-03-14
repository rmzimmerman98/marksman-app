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
            name: '',
            description: ''
        },
        abilityE:
        {
            name: '',
            description: ''
        },
        ultimate:
        {
            name: '',
            description: ''
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
]