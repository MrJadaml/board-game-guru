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
