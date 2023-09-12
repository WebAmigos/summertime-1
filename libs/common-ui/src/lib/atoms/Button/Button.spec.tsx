import { render } from '@testing-library/react';
import { Button } from './Button';

interface Receipt {
  id: string;
  fields: {
    receipt_id: string;
    name: string;
    email: string;
    treatment: string;
    price: string;
    date: string;
  };
}

export const sortReceipts = (data: Receipt[]) => {
  const sortedReceipts = [...data].sort((a, b) => {
    const [numberA, monthA, yearA] = a.fields.receipt_id
      .split('/')
      .map((num: string) => parseInt(num));
    const [numberB, monthB, yearB] = b.fields.receipt_id
      .split('/')
      .map((num: string) => parseInt(num));
    if (yearA !== yearB) return yearA - yearB;
    if (monthA !== monthB) return monthA - monthB;
    return numberA - numberB;
  });
  return sortedReceipts;
};

describe('Button component', () => {
  // antipattern
  it('should renders correctly', () => {
    // GWT (given, when, then)

    // render
    // given
    const { debug } = render(<Button label="Click me!" />);

    // actions
    // when

    // assertions
    // then
    const one = 2;

    expect(one).toBe(1);
  });

  // it('should sort Receipts', () => {
  //   const list = sortReceipts(data)

  //   const expectedResult = [{ }]

  //   expect(list).toEqual(expectedResult)
  // })
});
