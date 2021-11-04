import { HStack, Spacer } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import { StackProps } from '@chakra-ui/react';
import { t } from '@lingui/macro';
import * as React from 'react';
import { ProgressBarStep } from './ProgressBarStep';

interface FeatureProps extends StackProps {
  currentStep: number;
  progressNextStepInput?: number | undefined;
}

const NUMBER_STEPS = 3;

export const StaticProgress = ({ currentStep, progressNextStepInput, ...rest }: FeatureProps) => {
  let progressNextStep = progressNextStepInput === undefined ? 0 : progressNextStepInput;
  let progressPercentages: number[] = [];
  for (let i = 1; i < currentStep; i++) {
    progressPercentages.push(100);
  }
  progressPercentages.push(progressNextStep);
  for (let i = currentStep + 2; i < NUMBER_STEPS; i++) {
    progressPercentages.push(0);
  }
  return (
    <HStack width="100%" spacing="-1px" justifyContent="center" alignContent="center" {...rest}>
      <Spacer minW={10} flex={0} />
      <ProgressBarStep filled={currentStep >= 1} number={1} title={t`Problem einordnen`} />
      <Progress colorScheme="primary" bg="gray.100" minW={24} size="xs" value={progressPercentages[0]} flex="1" />
      <ProgressBarStep filled={currentStep >= 2} number={2} title={t`Mögliche Ansprüche`} />
      <Progress colorScheme="primary" bg="gray.100" minW={24} size="xs" value={progressPercentages[1]} flex="1" />
      <ProgressBarStep filled={currentStep >= 3} number={3} title={t`Nächste Schritte`} />
      <Spacer minW={10} flex={0} />
    </HStack>
  );
};
