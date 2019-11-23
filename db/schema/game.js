enum Tag {
  ANIMAL
  BUILDING
  CITY
  COLONY
  EARTH
  POWER
  JOVIAN
  MICROBE
  SCIENCE
  SPACE
  PLANT
  VENUS
  EVENT
}

enum Type {
  AUTOMATED
  ACTIVE
  EVENT
}

type Requirement {
  condition: String
  comparison: String
  value: Int
}

type Gain {
  resource: String
  value: Int
}

type ConditionRequirement {
  condition: String
  state: String
}

type EffectTrigger {
  condition: String
  action: String
  gains: [Gain]
}

type Characteristics {
  hasRedBorderEffects: Boolean,
  hasTilePlacementEffects: Boolean,
  hasProductionChangeEffects: Boolean,
  hasResourceChangeEffects: Boolean,
  hasExceptionToNormalRules: Boolean,
  isRaisingGlobalParameters: Boolean,
}

type Card {
  id: ID!
  cardId: String
  title: String
  cost: Int
  tags: [Tag]
  type: Type
  requirements: [Requirement]
  effectText: String
  immediateEffectsText: String
  immediateGains: [Gain]
  effectTrigger: [EffectTrigger]
  effectGains: [Gain]
  characteristics: [Characteristics]
}

projectCards [
  {
    type: action
    requirements: [
      {
        condition: 'temperature',
        comparison: '<',
        value: -11,
      }
    ],
    effect: 'When anyone places an ocean tile, gain 2 plants',
    immediateEffects: '(It must be -12ºC or colder to play. Gain 1 plant',
    immediateGains: [
      {
        resource: 'plant',
        value: 1,
      }
    ],
    effectTrigger: [
      {
        condition: 'water',
        action: 'placed',
        gains: [
          {
            resource: 'plant',
            value: 2,
          }
        ],
      }
    ],
    effectTypes: {
      hasRedBorderEffects: false,
      hasTilePlacementEffects: false,
      hasProductionChangeEffects: false,
      hasResourceChangeEffects: true,
      hasExceptionToNormalRules: false,
      isRaisingGlobalParameters: false,
    },
    flavorText: 'Suitable for freezing temperatures',
    victoryPoints: 0,
  },
]


module.exports.terraformingMars = {
  cardId: '023',
  title: 'Terraforming Mars',
  cards: [
    {
      title: 'Artic Alge',
      cost: 12,
      tags: ['plant'],
      type: action
      effect: 'When anyone places an ocean tile, gain 2 plants',
      immediateEffects: '(It must be -12ºC or colder to play. Gain 1 plant',
      immediateGains: [
        {
          resource: 'plant',
          value: 1,
        }
      ],
      effectConditions: [
        {
          thing: 'water',
          action: 'placed',
        }
      ],
      effectGains: [
        {
          resource: 'plant',
          value: 2,
        }
      ],
      requirements: [
        {
          condition: 'temperature',
          comparison: '<',
          value: -11,
        }
      ],
      flavorText: 'Suitable for freezing temperatures',
      victoryPoints: 0,
    },
  ]
}
