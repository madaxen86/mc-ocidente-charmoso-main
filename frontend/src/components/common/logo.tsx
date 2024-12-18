import { mergeProps } from 'solid-js';

type Props = {
  class?: string;
};

function Logo(rawProps: Props) {
  const props = mergeProps({ class: '' }, rawProps);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" class={props.class} viewBox="0 0 614 560">
      <path
        d="M341.011 227.467c-.699.6.893.267-1.032.611-1.414-2.753.502-123.311-.392-125.976-5.445.243-3.232-.038-9.71 7.23l-13.097 15.482c-3.705 4.207-6.537 8.092-10.383 12.186-1.792 1.906-3.361 4.26-5.103 6.177-2.082 2.291-3.529 4.271-5.323 6.32l-5.321 5.967c-.981 1.177-1.403 1.976-2.495 3.151-5.265 5.669-12.917 15.301-18.398 21.476l-10.295 12.274c-.885 1.187-1.553 1.904-2.571 3.064l-20.929 24.581c-.961 1.199-1.802 1.943-2.865 3.149-7.145 8.107-13.438 16.616-20.884 24.628l-26.04 30.748c-3.868 4.223-12.525 15.451-15.816 18.31-2.694-2.206-10.257-11.642-13.029-15.086l-13.168-15.401c-.939-1.143-1.482-2.098-2.479-3.166l-31.296-36.776c-6.635-7.91-14.36-17.473-21.045-24.844l-13.059-15.528c-5.683-7.132-15.659-17.796-21.029-24.859-.833-1.095-1.675-1.737-2.71-2.922-.998-1.142-1.385-2.088-2.442-3.202l-10.647-12.288c-.962-1.133-1.692-1.981-2.57-3.071l-13.064-15.536c-.835-1.088-1.695-2.088-2.519-3.124L8.12 105.66c-3.095-3.354-1.485-3.784-8.103-3.502L0 439.002l14.975-13.862c1.299-1.228 2.179-2.226 3.525-3.616 1.319-1.364 2.592-2.221 3.977-3.547l15.033-14.313c5.037-5.139 10.087-9.149 15.083-14.249 2.536-2.587 4.907-4.672 7.614-7.057 1.321-1.164 2.19-2.262 3.579-3.554 2.299-2.137 1.77-1.858 1.749-5.885-.054-10.103-.429-99.229.075-102.483l16.204 19.143c4.82 5.889 19.481 24.047 22.846 27.559 1.511 1.578 1.873 2.537 3.199 3.945 1.496 1.587 2.018 2.49 3.225 3.93l19.625 23.612c2.356 2.712 4.411 4.97 6.576 7.713.591.752.789 1.209 1.434 1.959.748.869 1.107 1.166 1.806 1.956l29.581 35.412c3.373-3.5 6.551-7.701 9.717-11.407 3.732-4.374 11.44-14.253 14.498-17.467.851-.895 1.203-1.07 1.842-1.907 2.039-2.674 4.565-5.182 6.447-7.853 3.602-5.113 15.021-17.54 19.698-23.557l39.049-46.704c2.34-2.732 4.35-4.999 6.588-7.692l4.874-6.046c.945-1.38.71-1.359 2.281-1.891l-.044 73.855c.941-.306 3.911-3.792 4.713-4.824l16.044-18.944c1.029-1.149 1.315-1.661 2.182-2.715l18.368-21.489c1.469-1.962 2.997-3.502 4.716-5.444 3.704-4.184 7.485-9.34 11.286-13.53 7.094-7.816 13.7-16.08 20.688-24.069 7.819-8.941 15.088-18.229 22.849-27.164 6.212-7.152 11.923-14.384 18.444-21.453l9.043-10.873c2.834-3.788 6.463-7.039 9.268-10.648.789-1.014 1.26-1.833 2.096-2.811 3.839-4.488 8.008-8.779 11.629-13.565l4.641-5.52c1.334-1.787 2.973-3.505 4.518-5.259l52.699-62.014c1.239-1.354 1.399-1.654 2.367-2.899l9.179-10.743c1.616-1.75 2.939-3.691 4.645-5.507 3.216-3.423 6.226-7.115 9.203-10.742.82-1 1.461-1.683 2.3-2.593 3.994-4.335 7.437-9.213 11.291-13.529 1.768-1.98 3.084-3.761 4.651-5.496 7.847-8.689 15.009-18.095 22.871-26.776l4.693-5.452c2.815-3.691 6.341-7.119 9.059-10.937-2.28 1.437-11.407 11.25-14.015 13.87L397.839 170.516c-19.022 19.043-38.003 37.808-56.828 56.951"
        style="fill:#282829"
      />
      <path
        d="m117.197 559.759 39.4-35.868c3.402-2.611 6.344-5.946 9.568-8.498 4.012-3.176 10.577-10.345 15.119-13.831 1.326-1.018 1.86-1.854 3.075-2.924l33.97-30.736c1.183-1.017 1.892-1.937 3.114-2.895 4.277-3.352 8.332-7.381 12.225-11.087l33.957-30.753c7.05-5.877 14.473-13.427 21.777-19.604 2.077-1.758 3.862-3.833 6.012-5.632l9.104-8.205c1.297-1.248 1.787-1.843 3.089-2.91 1.643-1.346 4.886-4.77 6.501-5.436 5.952 8.634 12.17 15.99 19.392 23.429 3.455 3.558 7.067 7.717 11.167 10.643 4.177 2.982 7.945 6.467 12.244 9.565 17.629 12.704 38.058 22.03 59.283 27.231 16.07 3.936 35.468 6.347 52.772 4.832 18.485-1.619 31.317-4.165 47.694-9.772 16.329-5.589 30.093-13.383 42.885-22.198l4.013-3.122c6.223-5.107 9.72-7.471 15.585-13.378 1.34-1.35 2.307-2.162 3.701-3.45 1.458-1.342 2.22-2.51 3.611-3.91 6.266-6.299 12.388-14.646 17.31-22.195 2.126-3.261 5.588-7.721 6.966-11.296-1.125-1.002-12.806-5.514-14.955-6.35l-45.826-18.421c-1.034.891-3.482 4.621-4.523 6.328-5.827 9.556-18.386 21.127-28.064 27.593-4.543 3.034-8.704 5.454-14.13 8.059-21.569 10.361-49.131 14.042-74.465 6.929-22.76-6.39-39.665-17.819-54.537-34.209-10.895-12.008-18.531-28.119-22.857-43.742-1.346-4.866-2.929-17.944-3.389-18.794-1.679.931-12.672 14.086-14.448 16.431l-7.228 8.183c-1.431 1.573-2.226 2.558-3.521 3.988-1.303 1.44-2.56 2.709-3.704 4.199l-44.962 51.702c-.819.869-1.097 1.006-1.82 1.939-3.477 4.485-7.632 8.472-10.975 12.73l-7.226 8.187c-9.923 10.953-19.093 22.149-29.018 33.023-3.603 3.947-6.957 8.489-10.58 12.376l-21.562 24.687c-1.178 1.261-2.467 2.819-3.705 4.203l-36.091 41.39c-2.427 2.831-5.055 5.393-7.347 8.453-.746.993-.835 1.012-1.77 1.969-6.336 6.478-13.259 15.614-19.858 22.646-1.534 1.637-6.636 6.95-6.973 8.501"
        style="fill:#8e7700"
      />
      <path
        d="M461.585 170.752c20.313.708 40.925 8.076 54.756 17.154 6.875 4.513 14.529 10.096 20.106 15.997 5.586 5.909 7.696 8.698 12.22 14.869 1.423 1.942 2.408 3.937 3.809 5.309 2.894-.56 60.712-24.072 61.215-24.511-2.752-6.215-17.149-25.477-22.82-31.291-3.149-3.228-5.676-6.46-8.921-9.121-3.619-2.969-5.1-4.821-9.633-8.423l-15.511-11.568c-1.719-1.181-3.574-2.236-5.591-3.445-11.957-7.174-23.233-12.94-37.19-17.337-7.032-2.214-5.31-3.134-10.603 3.525-1.407 1.77-2.805 3.014-4.215 4.8l-6.477 7.428c-2.256 3.087-16.461 18.579-18.848 21.766-2.345 3.133-12.143 13.591-12.297 14.848"
        style="fill:#211f1f"
      />
      <path
        d="M262.434 512.735c-2.698 8.11-9.941 14.906-17.82 16.793-2.024.486-8.674 1.028-10.649 1.007 1.755-3.597 2.032-4.152 7.095-4.162 3.38-.008 7.004-.235 9.746-1.544 4.682-2.237 9.127-8.811 9.839-12.777-7.641-1.176-13.601-.584-18.48 5.263-.952 1.14-1.851 4.411-3.033 5.21-2.569-4.541 3.427-9.252 6.392-10.501 1.989-.838 4.842-1.528 7.26-1.771 3.025-.305 5.725.348 8.416.14 1.955-4.473 1.952-4.15-2.782-4.454-13.98-.894-27.677 1.047-31.78 16.562-5.37 20.307 20.706 25.595 33.293 15.959 12.369-9.472 9.472-25.058 2.503-25.725"
        style="fill:#fff"
      />
      <path
        d="M263.877 515.624c6.971.666 9.868 16.252-2.502 25.724-12.587 9.636-38.663 4.347-33.294-15.96 4.104-15.514 17.801-17.455 31.78-16.56 4.735.303 4.739-.02 2.782 4.453-2.691.208-5.39-.445-8.415-.141-2.417.244-5.272.935-7.261 1.772-2.964 1.25-8.961 5.96-6.391 10.501 1.181-.799 2.08-4.07 3.032-5.211 4.879-5.846 10.84-6.437 18.482-5.263-.712 3.968-5.158 10.541-9.84 12.778-2.741 1.309-6.367 1.536-9.745 1.543-5.063.011-5.341.566-7.095 4.163 1.975.021 8.623-.521 10.648-1.007 7.879-1.887 15.122-8.684 17.819-16.792Zm.859-1.745h.004v-.004h-.004v.004ZM541.444 523.68c.339-.277-.367-.228.957-.597.866-.241.295-.041.898.058.174 1.459.221.584-.289 1.285-.524 2.104-2.88 6.607-3.912 9.25-.906 2.317-2.86 7.731-2.61 10.198 1.413.019 2.797-.881 4.124-1.529 1.102-.537 3.093-1.182 3.049-2.647l-2.816.464c.266-4.543 7.407-17.277 7.441-19.138.038-2.097-.023-.868-.551-1.315-2.982-2.754-12.151 8.124-13.309 9.238.224-1.052 5.583-13.154-2.057-8.775-4.426 2.537-6.669 6.668-8.883 8.09.577-3.197 2.448-5.558 2.285-9.389-2.141.181-3.893 2.653-6.803 3.122.256-1.761 1.318-3.314-1.62-2.623-3.107.731-6.864 5.896-8.842 6.997.29-2.545 1.519-4.219 1.338-7.016-1.446-.013-3.506 1.947-5.211 2.807-5.446 2.751-.876 1.691.709 2.045-.188 3.007-1.953 7.187-2.957 9.99-.652 1.82-3.426 8.689-3.545 9.729 5.727.481 4.22-5.544 8.653-13.27 1.827-3.187 4.888-7.964 8.886-8.085 3.19-.095-.159.645 4.89.763-.232 5.125-6.999 17.243-7.569 20.516 5.098-.785 3.883-1.838 8.641-10.76 1.639-3.074 6.132-10.049 9.316-9.958.653 3.532-6.296 18.147-6.748 20.804 3.471-.743 4.133-1.164 5.2-4.208.804-2.29 1.866-4.182 2.921-6.099 2.482-4.514 4.741-6.936 8.414-9.947M438.517 524.955c-.887 1.729.051 11.145-7.638 15.212-10.683 5.653-22.815-7.197-11.929-23.204 7.032-10.345 20.98-15.302 32.34-11.631 6.124 1.978 10.051 8.229 4.314 13.3-5.964 5.273-18.385-.857-28.398-2.026-4.266-.5-5.602.782-6.945 3.659 3.799.402 1.452-1.094 11.067.868 7.175 1.463 14.765 4.126 21.835.706 11.302-5.466 10.488-18.332-4.106-19.472-27.514-2.149-44.112 24.46-35.185 37.348 3.701 5.341 12.104 6.783 18.323 1.765 1.82-1.47 4.47-4.572 5.769-7.018 1.246-2.346 3.58-8.025.553-9.507"
        style="fill:#8e7700"
      />
      <path
        d="M462.828 507.318c1.089.97.346.152 2.347.39.094.01.215.038.298.052l.583.185c1.458 1.865-13.016 33.621-13.049 35.525.529.017 3.15-.67 3.567-.934.783-.495 1.399-2.268 1.961-3.299 2.405-4.42 10.272-15.672 14.689-16.041-.109 4.686-6.382 13.899-7.144 20.727 2.157-.031 7.262-2.495 8.234-3.641-.307-.167-.043-.218-.779-.201-1.399.035-.9.537-3.148.716 1.146-6.197 6.061-14.166 7.236-18.224.089-.305.247-1.055.182-1.419-.196-1.102-.289-.764-.681-1.122-3.736-2.579-14.668 10.964-16.325 12.74.556-2.879 4.074-10.648 5.471-14.02 1.646-3.978 4.43-10.352 4.593-14.948-1.792.17-6.672 3.161-8.035 3.514M321.473 507.562c.089.061.241-.001.298.122.492 1.07 4.054-1.569 2.295 3.86-4.383 13.526-3.06 5.699-13.337 12.274-14.838 9.495-18.754 30.603.018 13.935.743-.658 3.202-3.49 3.906-4.708 1.427-2.47 1.859-3.682 1.664-7.523-1.167.606-.914.64-1.402 2.095-.39 1.163-.598 1.718-1.067 2.699-1.784 3.739-6.848 11.655-11.558 10.422-2.104-8.653 9.064-18.482 17.427-18.319-1.567 6.849-6.391 14.484-7.84 21.546 2.706.058 7.108-2.609 9.079-3.475-.674-.677.762-1.176-2.029-.269-1.097.357-.311.579-2.135.375.072-3.086 4.973-14.292 6.374-17.901l2.777-.094c-.039-1.699-.815-1.718-1.517-3.003.436-2.003 2.176-5.688 2.934-7.689.922-2.435 2.195-5.374 2.536-8.145-1.44.234-3.005 1.159-4.366 1.759-1.21.532-3.251 1.045-4.057 2.039M344.166 522.606c2.261 1.119 4.374-1.711 2.654 3.451a87.125 87.125 0 0 1-2.257 6.007c-1.188 2.829-4.625 9.541-5.113 12.003 4.104-.764 4.06-1.624 5.718-4.988 2.489-5.055 11.166-16.626 15.322-16.328-.013 3.657-8.434 15.369-8.297 21.127 2.4.153 7.676-2.184 8.413-3.902-2.377-.192-1.269.699-3.587.565-.428-4.702 13.848-22.87 5.217-20.966-1.006.222-1.55.666-2.313 1.158l-7.525 6.019c-1.221 1.323-1.885 2.434-3.383 3.386.663-3.125 3.649-7.673 3.197-10.741-1.315-.044-2.732.817-4.008 1.284-.662.242-1.545.507-2.258.744-1.467.488-1.468.571-1.78 1.181M491.002 534.855c.008 2.095-3.11 7.148-2.472 8.819 1.155.406 5.027-1.419 6.496-2.151 1.772-.885 1.377-.371 1.911-1.813-1.963-.428-1.406.628-3.867.641.33-3.293 2.591-5.943 2.699-8.323l-2.718.527c1.316-3.243 3.822-5.462 1.292-9.27l-2.353 5.768c-1.905 3.949-7.072 12.272-11.726 12.253-.969-1.377-1.354-1.345-.901-3.875.675-3.759 3.83-8.279 6.599-10.254 5.799-4.141 8.471-5.163 17.266-4.544.55-1.61.753-.981.754-3.043-11.278-1.351-26.336 10.034-28.22 19.994-2.086 11.027 13.424-1.708 15.24-4.729M557.936 530.287c.543-2.139 2.435-5.004 5.03-3.894 2.666 2.56-4.625 15.757-10.066 15.291-5.822-.497-1.051-18.033 11.191-19.224 3.042-.295 5.8 1.088 4.362-2.669-6.714-1.274-18.756 7.327-21.333 16.614-1.202 4.327.3 8.316 4.765 7.485 5.339-.99 12.156-8.154 14.091-11.938 3.243-6.342-.683-11.27-6.693-6.288-.688.569-1.843 2.228-1.89 3.045-.142 2.46-.229.738.543 1.578M590.63 530.222c1.565-.899 3.27-5.507 5.507-3.929 2.906 2.05-1.986 9.799-3.755 11.778-.925 1.035-2.922 3.109-4.748 3.526-2.868.654-4.028-1.53-3.711-4.157.714-5.92 4.92-12.741 11.003-14.489 2.847-.819 5.108-.266 7.232-.665l.153-2.398c-6.56-1.756-18.998 7.296-21.614 16.266-1.207 4.142-.313 8.347 4.368 7.756 5.142-.648 12.537-8.071 14.272-11.698 1.425-2.977 2.548-8.429-1.729-8.588-2.553-.094-6.439 2.714-6.978 6.598M391.881 531.317c-1.262.886-1.289 3.098-4.332 6.507-1.52 1.706-3.587 4.154-7.326 3.625-5.36-5.257 7.815-23.894 11.909-19.038 1.382 1.662-1.352 3.751-2.446 4.384-2.779 1.607-3.44 1.16-6.858 1.39 2.166 5.15 16.535-4.874 13.01-8.391-2.086-2.083-8.052 1.266-9.477 2.182-10.253 6.591-15.88 24.009-6.326 22.258 3.86-.707 14.662-8.604 11.846-12.917"
        style="fill:#8e7700"
      />
      <path
        d="M339.228 531.238c-1.498.941-1.343 2.819-4.348 6.584-1.408 1.763-3.999 4.161-7.755 3.606-3.967-5.213 5.661-21.957 12.3-19.397 1.288 3.457-3.62 5.695-5.662 5.963-1.718.226-2.653-.216-3.684.791 4.84 3.675 16.891-6.916 12.683-9.329-3.931-2.254-12.658 4.304-16.037 9.078-4.165 5.884-7.3 17.296.636 15.672 4.068-.833 14.266-8.759 11.867-12.968M288.078 531.986c-.93.703-2.264 3.691-4.651 6.282-1.59 1.727-4.603 3.697-8.004 2.922-3.222-2.195 2.887-20.677 12.115-18.425.797 1.786-.461 2.621-.63 4.321 2.057-.253 2.13-1.812 2.969-3.433.723-1.401 1.803-2.913 2.193-4.353-5.545-2.179-17.983 6.722-21.149 16.997-3.793 12.31 10.166 9.076 16.466-.49l.691-3.821ZM375.29 521.102c1.529-1.769 2.405-.009 4.593-1.129-1.535-1.069-4.961.387-3.309-1.425l1.669-4.593c-4.608.117-3.233.532-5.094 3.461-1.56 2.456-2.8 1.402-5.108 2.708 1.025.58 2.162.366 3.678.391-.869 5.063-9.67 18.819-8.086 22.823 1.872.686 3.739.332 5.615-.483.702-.305 1.609-.76 2.28-1.113 1.333-.703 1.5-.627 1.872-1.854-2.15-.102-2.684 1.29-4.211 1.395-1.979.138-.907-.04-1.324-.362-1.481-1.474 6.022-16.28 7.425-19.819M564.511 539.093c-2.452 3.538 1.147 6.372 5.1 4.813 2.583-1.019 5.689-3.749 6.803-6.028 3.139-6.415-4.748-10.24-.617-14.521 1.003-1.04 4.547-2.719 4.758-.321.11 1.265-.434 1.042-.486 2.453 1.712.116 1.651-1.015 2.531-2.491.771-1.293 1.54-2.042 1.91-3.463-8.646-1.015-14.574 6.041-12.401 11.653 1.118 2.885 3.634 6.245.964 9.008-1.551 1.605-4.808 2.295-6.903.683l-1.659-1.786ZM292.253 522.967l3.776-.6c-.097 4.759-6.112 12.6-7.311 21.665 1.394-.191 6.962-2.372 7.542-3.373-.915-.926-.746-.256-1.883-.266-.067 0-.187-.001-.251-.007l-.477-.132c-2.032-.526 7.458-16.553 6.829-21.338-.489.092-7.685 2.444-8.225 4.051"
        style="fill:#8e7700"
      />
      <path
        d="M341.011 227.467c-.983-.478-.836.594-.734-3.48.034-1.374.015-2.767.016-4.142.028-37.926-.293-76.549.01-114.348l-.221-2.773c-.445-1 .369-.041-.495-.622.894 2.665-1.022 123.223.392 125.976 1.925-.344.333-.011 1.032-.611"
        style="fill:#a1a0a2"
      />
      <path
        d="M300.143 513.58c2.136 2.674 3.442-.107 3.479-.787.095-1.708-1.055-1.493-2.492-1.442-.422.777-.831 1.059-.987 2.229"
        style="fill:#8e7700"
      />
      <path
        d="M375.29 521.102c3.205-1.255 3.917.956 5.071-1.76-4.019-.231-3.665.061-3.787-.794-1.652 1.812 1.774.356 3.309 1.425-2.188 1.12-3.064-.64-4.593 1.129M541.444 523.68l1.646-.494-.08 1.24c.51-.701.463.174.289-1.285-.603-.099-.032-.299-.898-.058-1.324.369-.618.32-.957.597"
        style="fill:#d7c887"
      />
    </svg>
  );
}

export { Logo };