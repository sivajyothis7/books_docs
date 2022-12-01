import{_ as e,c as t,o as a,a as o}from"./app.6c9be388.js";var s="/assets/profit-and-loss.7760bebe.png",i="/assets/pnl-folded.590e6cfc.png";const y=JSON.parse('{"title":"Profit and Loss Statement","description":"","frontmatter":{},"headers":[{"level":2,"title":"Filters","slug":"filters"},{"level":3,"title":"Based On","slug":"based-on"},{"level":3,"title":"Periodicity","slug":"periodicity"},{"level":3,"title":"Date Range Filters","slug":"date-range-filters"},{"level":3,"title":"Consolidate Columns","slug":"consolidate-columns"},{"level":3,"title":"Hide Group Amounts","slug":"hide-group-amounts"},{"level":2,"title":"Folding Rows","slug":"folding-rows"}],"relativePath":"analytics/profit-and-loss.md","lastUpdated":1655287482000}'),r={name:"analytics/profit-and-loss.md"},n=o('<h1 id="profit-and-loss-statement" tabindex="-1">Profit and Loss Statement <a class="header-anchor" href="#profit-and-loss-statement" aria-hidden="true">#</a></h1><p>All of the money that your business earned from when it started minus the expenses that it incurred will be the total profit (or loss) the business has generated. But we aren\u2019t interested in the total amount, but the amount that is generated last month or last quarter or last year. Hence, Profit and Loss statement is always viewed for a specific time period.</p><p>Here are some insights you can gain from this report:</p><ol><li>Compare this month\u2019s profit with last month.</li><li>Compare quarter wise or year wise profits or losses.</li><li>Find out the total profit or loss for a specific time window.</li></ol><p>The P&amp;L statement for any period reflects all the income minus all the expenses in that period. At the end of the period, (a fiscal year) the total profit (or loss) goes into Owner\u2019s Equity because the profit in the business belongs to the owners. The owner\u2019s account is a liability to the company since the company has to pay out the profits/losses.</p><p>To check your P&amp;L statement, navigate to it using the sidebar: <code>Reports &gt; Profit And Loss</code></p><p><img src="'+s+'" alt="Profit and Loss"></p><p>By default the Profit and Loss report will show P&amp;L values for the last 3 months.</p><p>As you can clearly see, we have the total Income in the first part which also shows the income coming from each Income account split Monthly so you have a better understanding of your income. The same is done with the Expense section. The report is concluded by the total profit (or loss) incurred which is also split Monthly.</p><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-hidden="true">#</a></h2><p>The Profit and Loss report has several filters which can help you narrow the date range between which to display the report.</p><h3 id="based-on" tabindex="-1">Based On <a class="header-anchor" href="#based-on" aria-hidden="true">#</a></h3><p>This allows for toggling betwee the kind of filters used set the date range. It has 2 values:</p><ol><li>Until Date</li><li>Fiscal Year</li></ol><h3 id="periodicity" tabindex="-1">Periodicity <a class="header-anchor" href="#periodicity" aria-hidden="true">#</a></h3><p>This selects the interval for which the Profit and Loss has to be calculated.</p><p>Example setting this to Monthly will display columns on a monthly basis.</p><h3 id="date-range-filters" tabindex="-1">Date Range Filters <a class="header-anchor" href="#date-range-filters" aria-hidden="true">#</a></h3><p>These filters depend on the value of Based On</p><table><thead><tr><th>Based On</th><th>Date Range Filters</th></tr></thead><tbody><tr><td>Until Date</td><td>To Date and Count</td></tr><tr><td>Fiscal Year</td><td>To Year and From Year</td></tr></tbody></table><h4 id="to-date-and-count" tabindex="-1">To Date and Count <a class="header-anchor" href="#to-date-and-count" aria-hidden="true">#</a></h4><p><strong>To Date</strong> is the final date until which the report is to be displayed, by default the values is tomorrow&#39;s date.</p><p><strong>Count</strong> depends on Periodicity so if Count is 3 and Periodicity is Monthly then the report will display Profit and Loss columns for the last three months starting from <strong>To Date</strong></p><h4 id="to-year-and-from-year" tabindex="-1">To Year and From Year <a class="header-anchor" href="#to-year-and-from-year" aria-hidden="true">#</a></h4><p>These decide the fiscal year between which the Profit and Loss report has to be displayed. The number of columns will depend on the Periodicity.</p><h3 id="consolidate-columns" tabindex="-1">Consolidate Columns <a class="header-anchor" href="#consolidate-columns" aria-hidden="true">#</a></h3><p>Checking this this will sum up all the values for each row and display a single column.</p><h3 id="hide-group-amounts" tabindex="-1">Hide Group Amounts <a class="header-anchor" href="#hide-group-amounts" aria-hidden="true">#</a></h3><p>The Profit and Loss report format displays the group accounts such as Direct Income along with the non group accounts such as Sales and Services.</p><p>Group account balances depend on the non group account balances under them, group account balances are not directly updated.</p><p>So clicking on <strong>Hide Group Amounts</strong> will display only the non group account amounts making the report a bit easier to read.</p><h2 id="folding-rows" tabindex="-1">Folding Rows <a class="header-anchor" href="#folding-rows" aria-hidden="true">#</a></h2><p><img src="'+i+'" alt="Profit and Loss Folded Rows"></p><p>Rows in the Profit and Loss report which display group accounts can be clicked to fold all the rows underneath them.</p>',34),l=[n];function d(h,c,p,u,f,m){return a(),t("div",null,l)}var w=e(r,[["render",d]]);export{y as __pageData,w as default};