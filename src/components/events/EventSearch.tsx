import React, { FormEvent, useRef } from "react";
import styled, { css } from "styled-components";
import Button from "components/button";

function EventSearch({ onSearch }: EventSearchProps) {
  const YearInputRef = useRef<HTMLSelectElement>();
  const MonthInputRef = useRef<HTMLSelectElement>(null);

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const selectedYear = YearInputRef.current.value;
    const selectedMonth = MonthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);
  }

  return (
    <S.Form onSubmit={submitHandler}>
      <S.Controls>
        <S.Control className="year-control">
          <S.YearLabel htmlFor="year">Year</S.YearLabel>
          <S.YearSelect id="year" ref={YearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </S.YearSelect>
        </S.Control>

        <S.Control>
          <S.MonthLabel htmlFor="month">Month</S.MonthLabel>
          <S.MonthSelect id="month" ref={MonthInputRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </S.MonthSelect>
        </S.Control>
      </S.Controls>

      <Button>Find Event</Button>
    </S.Form>
  );
}

const S = {
  Form: styled.form`
    margin: 2rem auto;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    background-color: white;
    border-radius: 6px;
    width: 50%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  `,
  Controls: styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;
  `,
  Control: styled.div`
    flex: 1;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
  `,
  YearLabel: styled.label`
    font-weight: bold;
  `,
  YearSelect: styled.select`
    font: inherit;
    background-color: white;
    border-radius: 6px;
    width: 70%;
    padding: 0.25rem;
  `,
  MonthLabel: styled.label`
    font-weight: bold;
  `,
  MonthSelect: styled.select`
    font: inherit;
    background-color: white;
    border-radius: 6px;
    width: 70%;
    padding: 0.25rem;
  `,
};

//@media

//# types
interface EventSearchProps {
  onSearch: (selectedYear: string, selectedMonth: string) => any;
}
export default EventSearch;
