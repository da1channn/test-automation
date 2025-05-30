import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create default plans
  const freePlan = await prisma.plan.create({
    data: {
      name: 'Free',
      description: 'Free plan with limited requests',
      requestsLimit: 100,
    },
  });

  const proPlan = await prisma.plan.create({
    data: {
      name: 'Pro',
      description: 'Professional plan with higher limits',
      requestsLimit: 1000,
    },
  });

  const enterprisePlan = await prisma.plan.create({
    data: {
      name: 'Enterprise',
      description: 'Enterprise plan with unlimited requests',
      requestsLimit: -1, // -1 means unlimited
    },
  });

  // Create sample user
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
      planId: freePlan.id,
    },
  });

  console.log({ freePlan, proPlan, enterprisePlan, user });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });