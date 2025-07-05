import React from 'react'

import { Hero } from '@/components/Hero'
import { Menu } from '@/components/Menu'
import { FloatingMenu } from '@/components/FloatingMenu'

import { ROI } from './sections/ROI'
import { Ethno } from './sections/Ethno'
import { Regulators } from './sections/Regulators'
import { PenaltiesAD } from './sections/PenaltiesAD'
import { PenaltiesOP } from './sections/PenaltiesOP'
import { News } from './sections/News'
import { Licenses } from './sections/Licenses'
import { Taxes } from './sections/Taxes'
import { PaymentRestrictions } from './sections/PaymentRestrictions'
import { AdvertisingRestrictions } from './sections/AdvertisingRestrictions'
import { SanctionExamples } from './sections/SanctionExamples'
import { SearchQueries } from './sections/SearchQueries'
import { ProblemAreas } from './sections/ProblemAreas'
import { PromotionTools } from './sections/PromotionTools'
import { PartnerNetworks } from './sections/PartnerNetworks'
import { CpaRates } from './sections/CpaRates'
import { AvgDepositPayout } from './sections/AvgDepositPayout'
import { PlayerPortrait } from './sections/PlayerPortrait'
import { Operators } from './sections/Operators'
import { RegistrationFlows } from './sections/RegistrationFlows'
import { PaymentMethods } from './sections/PaymentMethods'
import { CompetitorPaymentMethods } from './sections/CompetitorPaymentMethods'

const Dash = () => (
  <>
    <div className="w-full h-full bg-white">
      <Hero countryTitle="Индия" menu={<Menu />} />
      <FloatingMenu menu={<Menu />} />
      <div className="flex flex-col gap-16 mx-auto pt-16 pb-32 px-4">
        <ROI />
        <Ethno />
        <Regulators />
        <PenaltiesAD />
        <PenaltiesOP />
        <News />
        <Licenses />
        <Taxes />
        <PaymentRestrictions />
        <AdvertisingRestrictions />
        <SanctionExamples />
        <SearchQueries />
        <ProblemAreas />
        <PromotionTools />
        <PartnerNetworks />
        <CpaRates />
        <AvgDepositPayout />
        <PlayerPortrait />
        <Operators />
        <RegistrationFlows />
        <PaymentMethods />
        <CompetitorPaymentMethods />
      </div>
    </div>
  </>
);

export { Dash };
