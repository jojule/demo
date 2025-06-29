package us.joonas.taskmanagement.service;

import org.springframework.stereotype.Service;
import us.joonas.security.domain.Wine;
import org.springframework.data.domain.Pageable;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.math.BigDecimal;
import java.time.LocalDate;

@Service
@BrowserCallable
@AnonymousAllowed
public class WineService {

    private static final List<Wine> data = new CopyOnWriteArrayList<>();

    private static Wine createExampleData(Long id, String vintageYear, String grapeVariety, String region, BigDecimal alcoholContent, String tastingNotes, Double bottleSize, LocalDate releaseDate, String producer) {
        Wine wine = new Wine();
        wine.setId(id);
        wine.setVintageYear(vintageYear);
        wine.setGrapeVariety(grapeVariety);
        wine.setRegion(region);
        wine.setAlcoholContent(alcoholContent);
        wine.setTastingNotes(tastingNotes);
        wine.setBottleSize(bottleSize);
        wine.setReleaseDate(releaseDate);
        wine.setProducer(producer);
        return wine;
    }

    static {
        data.add(createExampleData(1L, "2015", "Cabernet Sauvignon", "Napa Valley", new BigDecimal("14.5"), "Rich and full-bodied with notes of dark fruit", 750.0d, LocalDate.of(2018, 5, 15), "Silver Oak"));
        data.add(createExampleData(2L, "2018", "Chardonnay", "Sonoma Coast", new BigDecimal("13.0"), "Crisp with hints of apple and citrus", 750.0d, LocalDate.of(2020, 3, 10), "Kistler"));
        data.add(createExampleData(3L, "2016", "Pinot Noir", "Willamette Valley", new BigDecimal("13.5"), "Elegant with flavors of cherry and spice", 750.0d, LocalDate.of(2019, 7, 20), "Domaine Serene"));
        data.add(createExampleData(4L, "2019", "Sauvignon Blanc", "Marlborough", new BigDecimal("12.5"), "Zesty with tropical fruit and herbaceous notes", 750.0d, LocalDate.of(2021, 1, 12), "Cloudy Bay"));
        data.add(createExampleData(5L, "2020", "Syrah", "Barossa Valley", new BigDecimal("14.0"), "Bold with black pepper and dark berry flavors", 750.0d, LocalDate.of(2022, 9, 30), "Penfolds"));
        data.add(createExampleData(6L, "2017", "Merlot", "Bordeaux", new BigDecimal("13.8"), "Smooth with plum and chocolate undertones", 750.0d, LocalDate.of(2020, 11, 5), "Château Pichon Longueville"));
        data.add(createExampleData(7L, "2014", "Zinfandel", "California", new BigDecimal("15.0"), "Jammy with raspberry and spice notes", 750.0d, LocalDate.of(2018, 8, 22), "Ridge Vineyards"));
        data.add(createExampleData(8L, "2021", "Riesling", "Mosel", new BigDecimal("11.5"), "Sweet with floral and peach aromas", 750.0d, LocalDate.of(2022, 4, 15), "Dr. Loosen"));
        data.add(createExampleData(9L, "2013", "Malbec", "Mendoza", new BigDecimal("14.2"), "Rich with dark fruit and leather notes", 750.0d, LocalDate.of(2017, 6, 18), "Catena Zapata"));
        data.add(createExampleData(10L, "2022", "Grenache", "Priorat", new BigDecimal("14.0"), "Fruity with strawberry and herbal hints", 750.0d, LocalDate.of(2023, 2, 1), "Alvaro Palacios"));
    }

    public List<Wine> list(Pageable pageable) {
        int from = (int) pageable.getOffset();
        int to = (int) Math.min(pageable.getOffset() + pageable.getPageSize(), data.size());
        return data.subList(from, to);
    }

    public Wine save(Wine value) {
        Optional<Wine> existingItem = data.stream().filter(item -> Objects.equals(item.getId(), value.getId())).findFirst();
        existingItem.ifPresentOrElse(item -> {
            int index = data.indexOf(item);
            data.set(index, value);
        }, () -> {
            Long maxId = data.stream().map(Wine::getId).max(Long::compareTo).orElse(0L);
            value.setId(maxId + 1L);
            data.add(value);
        });
        return value;
    }

    public void delete(Long id) {
        data.removeIf(item -> Objects.equals(item.getId(), id));
    }
}
