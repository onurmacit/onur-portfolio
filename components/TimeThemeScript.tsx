import { DAY_START_HOUR, NIGHT_START_HOUR } from "@/lib/theme";

const script = `(function(){var h=new Date().getHours();var t=h>=${DAY_START_HOUR}&&h<${NIGHT_START_HOUR}?"day":"night";document.documentElement.setAttribute("data-theme",t);})();`;

export function TimeThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      // Runs before paint to avoid a flash of the wrong theme.
      suppressHydrationWarning
    />
  );
}
