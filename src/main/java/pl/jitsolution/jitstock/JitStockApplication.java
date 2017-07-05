package pl.jitsolution.jitstock;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class JitStockApplication {

    public static void main(String[] args) {

        SpringApplication.run(JitStockApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/offers").allowedOrigins("http://localhost:8080");
                registry.addMapping("/api/offer/create").allowedOrigins("http://localhost:8080");
                registry.addMapping("/offer/{offerId}").allowedOrigins("http://localhost:8080");
            }
        };
    }
}
