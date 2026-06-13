import { DAY_START_HOUR, NIGHT_START_HOUR, THEME_STORAGE_KEY } from "@/lib/theme";

const script = `(function(){var p=localStorage.getItem("${THEME_STORAGE_KEY}");var t;if(p==="day"||p==="night"){t=p;}else{var h=new Date().getHours();t=h>=${DAY_START_HOUR}&&h<${NIGHT_START_HOUR}?"day":"night";}document.documentElement.setAttribute("data-theme",t);})();`;

export function TimeThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
