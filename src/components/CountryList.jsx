import { For, Show } from "rc-extended"
import CountryItem from "./CountryItem";
import React, { useState, useEffect } from 'react';

function CountryList({ countries }) {
  return (
    <div className="flex flex-wrap gap-24 px-32 justify-center sma:px-8 sma:gap-12 pb-12">
      <Show when={countries.length > 0} fallback={<p className="text-center font-medium dark:white text-2xl">No countries Found 😪</p>}>
        <For each={countries}>
          <CountryItem item="country" />
        </For>
      </Show>
    </div>
  );
}

export default CountryList;
