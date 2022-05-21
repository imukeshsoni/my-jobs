import { Card, CardContent, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

import './styles.css'

interface CustomCard {
  title?: string;
  content?: string;
}

function WhyUs(): JSX.Element {
  let cards: CustomCard[] = [
    {
      title: 'Get More Visibility',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, asperiores.',
    },
    {
      title: 'Organize Your Candidates ',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, asperiores.',
    },
    {
      title: 'Verify Their Abilities',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, asperiores.',
    },
  ];
  return (
    <>
      <div className="whyus__title"> Why Us</div>

      <div className="card__container">
      {cards.map((card, index) => {
        return (

          <Card sx={{ maxWidth: 250 }} key={index}>
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  color: '#43AFFF',
                  fontSize: 22,
                  maxWidth: 140,
                  fontWeight: '500',
                    paddingBottom: 1
                }}
              >
                {card.title}
              </Typography>
              <Typography variant="body2">{card.content}</Typography>
            </CardContent>
          </Card>

);
})}
</div>
    </>
  );
}

export default WhyUs;
